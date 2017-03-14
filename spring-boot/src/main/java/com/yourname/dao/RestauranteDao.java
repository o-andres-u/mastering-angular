package com.yourname.dao;

import com.yourname.entity.Restaurante;

import java.util.Collection;

public interface RestauranteDao {
    Collection<Restaurante> getAllRestaurantes();

    Restaurante getRestauranteById(int id);

    void removeRestauranteById(int id);

    void updateRestaurante(Restaurante student);

    void insertRestauranteToDb(Restaurante student);
}
