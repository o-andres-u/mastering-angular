package com.candidato.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.ws.soap.client.SoapFaultClientException;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.entity.CompetenciaResponse;
import com.candidato.entity.ContactoResponse;
import com.candidato.interfaces.ICandidatoService;
import com.candidato.interfaces.ICompetenciaService;
import com.candidato.interfaces.IContactoService;
import com.candidato.service.AlmacenarArchivoException;

@RestController
@RequestMapping("/candidato")
public class CandidatoController {

	@Autowired
	private ICompetenciaService competenciaService;
	
	@Autowired
	private ICandidatoService candidatoService;
	
	@Autowired
	private IContactoService contactoService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/almacenarCandidato",method = RequestMethod.POST, consumes = "multipart/form-data")
	public ResponseEntity<CandidatoResponse> guardarCandidato(
			@RequestPart("hojaVidaFile") MultipartFile hojavida, @RequestPart("candidato") Candidato candidato) throws AlmacenarArchivoException, SoapFaultClientException {
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
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/consultaContactos/{lenguaje}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<ContactoResponse> getListaContactos(@PathVariable String lenguaje){
        return new ResponseEntity<>(contactoService.getContactos(lenguaje), HttpStatus.OK);
    }
	
	
	@ExceptionHandler(AlmacenarArchivoException.class)
	@ResponseBody
    public ResponseEntity<CandidatoResponse> catcherFileException(AlmacenarArchivoException exc) {
		CandidatoResponse response = new CandidatoResponse();
		response.setSuccess(false);
		response.setException(exc.getMessage());
		response.setExceptionCode(2);
		return new ResponseEntity<>(response, HttpStatus.OK);
    }
	
	@ExceptionHandler(SoapFaultClientException.class)
	@ResponseBody
    public ResponseEntity<CandidatoResponse> catcherServiceUnaviableException(SoapFaultClientException exc) {
		CandidatoResponse response = new CandidatoResponse();
		response.setSuccess(false);
		response.setException(exc.getMessage());
		response.setExceptionCode(1);
		return new ResponseEntity<>(response, HttpStatus.SERVICE_UNAVAILABLE);
    }
}
