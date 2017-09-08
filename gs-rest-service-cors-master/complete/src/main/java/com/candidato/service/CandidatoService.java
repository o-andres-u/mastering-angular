package com.candidato.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.interfaces.IAlmacenarArchivoService;
import com.candidato.interfaces.ICandidatoService;
import com.candidato.interfaces.IEnvioCorreoService;
import com.candidato.service.recursoshumanos.RecursosHumanosWebServiceClient;

import https.recursoshumanos.IngresarHojaDeVidaAspiranteResponse;
import https.recursoshumanos.IngresoHojaVidaDTO;

@Service
public class CandidatoService implements ICandidatoService{

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
	public CandidatoResponse almacenarCandidato(MultipartFile hojaVidaFile, Candidato candidato) {
		IngresarHojaDeVidaAspiranteResponse respuestaServicio = clienteWebService.ingresarHojaVidaAspiranteWebService(uuidTenant, hojaVidaDTO.getHojaVidaCandiatoDTO(candidato));
		almacenamientoArchivoService.AlmacenarArchivo(hojaVidaFile);
		correoService.enviarEmail(candidato);
		CandidatoResponse response = new CandidatoResponse();
		response.setSuccess(true);
		response.setHojaVidaDto((IngresoHojaVidaDTO) respuestaServicio.getReturn());
    	return response;
	}


}
