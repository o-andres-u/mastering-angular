package com.yourname.dao;

import com.yourname.entity.Restaurante;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

@Repository
@Qualifier("mongoData")
public class MongoStudentDaoImpl implements RestauranteDao {


    @Override
    public Collection<Restaurante> getAllRestaurantes() {
        return new ArrayList<Restaurante>(){
            {
//                add(new Restaurante(1, "Mario", "Nothing"));
            }
        };
    }

    @Override
    public Restaurante getRestauranteById(int id) {
        return null;
    }

    @Override
    public void removeRestauranteById(int id) {

    }

    @Override
    public void updateRestaurante(Restaurante student) {

    }

    @Override
    public void insertRestauranteToDb(Restaurante student) {

    }
}
