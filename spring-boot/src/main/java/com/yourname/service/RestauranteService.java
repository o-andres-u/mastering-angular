package com.yourname.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.yourname.dao.RestauranteDao;
import com.yourname.entity.Data;
import com.yourname.entity.Restaurante;

@Service
public class RestauranteService {

    @Autowired
    @Qualifier("mysql")
    private RestauranteDao restauranteDao;

    public Data getAllRestaurantes(){
        return new Data("success", this.restauranteDao.getAllRestaurantes());
    }

    public Data getStudentById(int id){
    	try {
    		return new Data("success",this.restauranteDao.getRestauranteById(id));
    	} catch (Exception e) {
    		return new Data("fail",null);
		}
    	
    }


    public Data removeStudentById(int id) {
    	try {
    		this.restauranteDao.removeRestauranteById(id);
    		return new Data("success",null);
    	} catch (Exception e) {
    		return new Data("fail",null);
		}
    }

    public Data updateStudent(Restaurante student){
    	try {
    		this.restauranteDao.updateRestaurante(student);
    		return new Data("success",null);
    	} catch (Exception e) {
    		return new Data("fail",null);
		}
        
    }

    public Data insertStudent(Restaurante student) {
    	try {
    		this.restauranteDao.insertRestauranteToDb(student);
    		return new Data("success",null);
    	} catch (Exception e) {
    		return new Data("fail",null);
		}
        
    }
    
    public Data getRandomRestaurant() {
    	try {
    		List<Restaurante> dataList = (List<Restaurante>)getAllRestaurantes().getData();
    		return new Data("success",dataList.get(new Random().nextInt(dataList.size())));
    	} catch (Exception e) {
    		return new Data("fail",null);
		}
        
    }
    
}
