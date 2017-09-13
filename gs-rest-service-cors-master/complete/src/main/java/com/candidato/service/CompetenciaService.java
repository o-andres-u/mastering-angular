package com.candidato.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.ws.soap.client.SoapFaultClientException;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.entity.CompetenciaResponse;
import com.candidato.interfaces.ICompetenciaService;
import com.candidato.interfaces.IEnvioCorreoService;
import com.candidato.service.recursoshumanos.RecursosHumanosWebServiceClient;

import https.recursoshumanos.ConsultarCompetenciasLaboralesResponse;
import https.recursoshumanos.IngresarHojaDeVidaAspiranteResponse;
import https.recursoshumanos.IngresoHojaVidaDTO;

@Service
public class CompetenciaService implements ICompetenciaService{

	@Value("${spring.rrhh.tenant.uuidTenant}")
	private String uuidTenant;
	
	@Value("${spring.rrhh.tipoid.tipoIdCompania}")
	private String tipoIdCompania;
	
	@Value("${spring.rrhh.id.idCompania}")
	private String idCompania;

	@Autowired
	protected RecursosHumanosWebServiceClient clienteWebService;
	
	@Autowired
	protected HojaVidaDTOService hojaVidaDTO;
	
	@Autowired
	protected IEnvioCorreoService correoService;

	@Override
    public CompetenciaResponse getCompetenciaCandidato() {
		CompetenciaResponse response = new CompetenciaResponse();
		try {
			ConsultarCompetenciasLaboralesResponse respuestaServicio = clienteWebService.getCompetenciasLaboralesFromWebService(uuidTenant, tipoIdCompania, idCompania);
			response.setSuccess(true);
			response.setCompetencias((ArrayList<String>) respuestaServicio.getReturn());
		} catch (Exception e) {
			if (e instanceof SoapFaultClientException) {
				response.setMsg("Error al consumir el servicio web de RRHH");
				response.setException(e.getMessage());
			}
			response.setSuccess(false);
		}
		return response;
    }
    

	@Override
	public CandidatoResponse actualizarNivelCompetenciaCandidato(Candidato candidato) {
		IngresarHojaDeVidaAspiranteResponse respuestaServicio = clienteWebService.ingresarHojaVidaAspiranteWebService(uuidTenant, hojaVidaDTO.getHojaVidaCandiatoDTO(candidato));
		CandidatoResponse response = new CandidatoResponse();
		response.setSuccess(true);
		response.setHojaVidaDto((IngresoHojaVidaDTO) respuestaServicio.getReturn());
    	return response;
	}	

}
