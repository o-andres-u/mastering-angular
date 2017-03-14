package com.yourname.dao;

import com.yourname.entity.Restaurante;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
@Qualifier("fakeData")
public class FakeStudentDaoImpl implements RestauranteDao {

    private static Map<Integer, Restaurante> data;

    static {

    	data = new HashMap<Integer, Restaurante>(){

            {
                put(1, new Restaurante(1, "Restaurante1", "Direccion1", "Descripcion1" ,"img1.jpg", "bajo"));
                put(2, new Restaurante(2, "Restaurante2", "Direccion2", "Descripcion2" ,"img2.jpg", "normal"));
                put(3, new Restaurante(3, "Restaurante3", "Direccion3", "Descripcion3" ,"img3.jpg", "alto"));
            }
        };
    }

    @Override
    public Collection<Restaurante> getAllRestaurantes(){
        return this.data.values();
    }

    @Override
    public Restaurante getRestauranteById(int id){
        return this.data.get(id);
    }

    @Override
    public void removeRestauranteById(int id) {
        this.data.remove(id);
    }

    @Override
    public void updateRestaurante(Restaurante student){
        Restaurante s = data.get(student.getId());
        s.setNombre(student.getNombre());
        s.setDescripcion(student.getDescripcion());
        s.setDireccion(student.getDireccion());
        s.setImagen(student.getImagen());
        s.setPrecio(student.getPrecio());
        data.put(student.getId(), student);
    }

    @Override
    public void insertRestauranteToDb(Restaurante student) {
        this.data.put(student.getId(), student);
    }
}
