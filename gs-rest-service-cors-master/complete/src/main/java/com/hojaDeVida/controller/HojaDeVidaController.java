package com.hojaDeVida.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hojaDeVida.entity.Candidato;
import com.hojaDeVida.service.HojaDeVidaService;

@RestController
@RequestMapping("/candidato")
public class HojaDeVidaController {

	@Autowired
	private HojaDeVidaService hojaDeVidaService;
	
	@CrossOrigin(origins = "http://localhost:9000")
	@RequestMapping(value = "/{name}", method = RequestMethod.GET, produces = "application/json")
    public Candidato getCandidatoByName(@PathVariable("name") String name){
        return hojaDeVidaService.getCandidatoByName(name);
    }
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertStudent(@RequestBody Candidato candidato){
        hojaDeVidaService.insertCandidato(candidato);
    }
	
}
