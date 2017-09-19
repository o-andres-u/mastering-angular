package com.candidato.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.ws.soap.client.SoapFaultClientException;

import com.candidato.Application;
import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.interfaces.IAlmacenarArchivoService;
import com.candidato.interfaces.ICandidatoService;
import com.candidato.interfaces.IEnvioCorreoService;
import com.candidato.service.recursoshumanos.RecursosHumanosWebServiceClient;

import https.recursoshumanos.IngresarHojaDeVidaAspiranteResponse;
import https.recursoshumanos.IngresoHojaVidaDTO;

@Service
public class CandidatoService implements ICandidatoService {

	private static Logger log = Logger.getLogger(Application.class);
	
	@Value("${spring.rrhh.tenant.uuidTenant}")
	private String uuidTenant;

	@Value("${spring.rrhh.tipoid.tipoIdCompania}")
	private String tipoIdCompania;

	@Value("${spring.rrhh.id.idCompania}")
	private String idCompania;

	@Autowired
	protected RecursosHumanosWebServiceClient clienteWebService;

	@Autowired
	protected IEnvioCorreoService correoService;

	@Autowired
	protected IAlmacenarArchivoService almacenamientoArchivoService;

	@Autowired
	protected HojaVidaDTOService hojaVidaDTO;

	@Override
	public CandidatoResponse almacenarCandidato(final MultipartFile hojaVidaFile, final Candidato candidato) {
		CandidatoResponse response = new CandidatoResponse();
		IngresarHojaDeVidaAspiranteResponse respuestaServicio = clienteWebService
				.ingresarHojaVidaAspiranteWebService(uuidTenant, hojaVidaDTO.getHojaVidaCandiatoDTO(candidato));
		response.setSuccess(true);
		response.setHojaVidaDto((IngresoHojaVidaDTO) respuestaServicio.getReturn());
		log.info("Se registro el candidato: " + candidato.getNombreApellidos());

		almacenamientoArchivoService.AlmacenarArchivo(hojaVidaFile, candidato.getHojaVida());
		correoService.enviarEmail(candidato);
		return response;
	}
}
