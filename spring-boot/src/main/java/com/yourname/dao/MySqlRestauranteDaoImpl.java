package com.yourname.dao;

import com.yourname.entity.Restaurante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.List;

@Repository("mysql")
public class MySqlRestauranteDaoImpl implements RestauranteDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static class StudentRowMapper implements RowMapper<Restaurante> {

        @Override
        public Restaurante mapRow(ResultSet resultSet, int i) throws SQLException {
            Restaurante student = new Restaurante();
            student.setId(resultSet.getInt("id"));
            student.setNombre(resultSet.getString("nombre"));
            student.setDireccion(resultSet.getString("direccion"));
            student.setDescripcion(resultSet.getString("descripcion"));
            student.setImagen(resultSet.getString("imagen"));
            student.setPrecio(resultSet.getString("precio"));
            return student;
        }
    }


    @Override
    public Collection<Restaurante> getAllRestaurantes() {
        // SELECT column_name(s) FROM table_name
        final String sql = "SELECT id, nombre, direccion, descripcion, imagen, precio FROM restaurante";
        List<Restaurante> students = jdbcTemplate.query(sql, new StudentRowMapper());
        return students;
    }

    @Override
    public Restaurante getRestauranteById(int id) {
        // SELECT column_name(s) FROM table_name where column = value
        final String sql = "SELECT id, nombre, direccion, descripcion, imagen, precio FROM restaurante where id = ?";
        Restaurante student = jdbcTemplate.queryForObject(sql, new StudentRowMapper(), id);
        return student;
    }

    @Override
    public void removeRestauranteById(int id) {
        // DELETE FROM table_name
        // WHERE some_column = some_value
        final String sql = "DELETE FROM restaurante WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public void updateRestaurante(Restaurante restaurante) {
        // UPDATE table_name
        // SET column1=value, column2=value2,...
        // WHERE some_column=some_value
        final String sql = "UPDATE restaurante SET nombre = ?, direccion = ?, descripcion = ?, imagen = ?, precio = ? WHERE id = ?";
        final int id = restaurante.getId();
        final String nombre = restaurante.getNombre();
        final String direccion = restaurante.getDireccion();
        final String descripcion = restaurante.getDescripcion();
        final String imagen = restaurante.getImagen();
        final String precio = restaurante.getPrecio();
        jdbcTemplate.update(sql, new Object[]{nombre, direccion, descripcion,imagen,precio, id});
    }

    @Override
    public void insertRestauranteToDb(Restaurante restaurante) {
        // INSERT INTO table_name (column1, column2, column3,...)
        // VALUES (value1, value2, value3,...)
        final String sql = "INSERT INTO restaurante (id, nombre, direccion, descripcion,imagen,precio) VALUES (?, ?, ?, ?, ?, ?)";
        final int id = restaurante.getId();
        final String nombre = restaurante.getNombre();
        final String direccion = restaurante.getDireccion();
        final String descripcion = restaurante.getDescripcion();
        final String imagen = restaurante.getImagen();
        final String precio = restaurante.getPrecio();
        jdbcTemplate.update(sql, new Object[]{id, nombre, direccion, descripcion,imagen,precio});

    }
}
