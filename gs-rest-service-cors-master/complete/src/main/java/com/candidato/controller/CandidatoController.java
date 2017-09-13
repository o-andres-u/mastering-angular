package com.candidato.controller;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.entity.CompetenciaResponse;
import com.candidato.interfaces.ICandidatoService;
import com.candidato.interfaces.ICompetenciaService;

import https.recursoshumanos.IngresoHojaVidaDTO;

@RestController
@RequestMapping("/candidato")
public class CandidatoController {

	@Autowired
	private ICompetenciaService competenciaService;
	
	@Autowired
	private ICandidatoService candidatoService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/almacenarCandidato",method = RequestMethod.POST, consumes = "multipart/form-data")
	public ResponseEntity<CandidatoResponse> guardarCandidato(
			@RequestPart("hojaVidaFile") MultipartFile hojavida, @RequestPart("candidato") Candidato candidato) throws IOException {
		return new ResponseEntity<>(candidatoService.almacenarCandidato(hojavida, candidato), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/consultaCompetencias", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<CompetenciaResponse> getListaCompetenciasCandidato(){
        return new ResponseEntity<>(competenciaService.getCompetenciaCandidato(), HttpStatus.OK);
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/actualizarCompetencias", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CandidatoResponse> actualizarCompetenciaCandidato(@RequestBody Candidato candidato){
        return new ResponseEntity<>(competenciaService.actualizarNivelCompetenciaCandidato(candidato), HttpStatus.OK);
    }
}
