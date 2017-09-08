
package com.candidato.service.recursoshumanos;

import javax.xml.bind.JAXBElement;
import javax.xml.namespace.QName;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.springframework.ws.soap.client.core.SoapActionCallback;

import https.recursoshumanos.ConsultarCompetenciasLaborales;
import https.recursoshumanos.ConsultarCompetenciasLaboralesResponse;
import https.recursoshumanos.IngresarHojaDeVidaAspirante;
import https.recursoshumanos.IngresarHojaDeVidaAspiranteResponse;
import https.recursoshumanos.IngresoHojaVidaDTO;


public class RecursosHumanosWebServiceClient extends WebServiceGatewaySupport {

	private static final Logger log = LoggerFactory.getLogger(RecursosHumanosWebServiceClient.class);
	
//	@Value("${client.default.uri}")
	private String defaultUri = "https://epalaciod:8182/RecursosHumanos/RecursosHumanos";
	
	
	public ConsultarCompetenciasLaboralesResponse getCompetenciasLaboralesFromWebService(String uuidTenant, String tipoIdCompania, String idCompania ) {

		ConsultarCompetenciasLaborales request = new ConsultarCompetenciasLaborales();
		request.setArg0(uuidTenant);
		request.setArg1(tipoIdCompania);
		request.setArg2(idCompania);

		log.info("Requesting for tenat:" + uuidTenant + " tipoIdCia: " + tipoIdCompania + " idCia: " + idCompania);

		
		@SuppressWarnings("unchecked")
		JAXBElement<ConsultarCompetenciasLaboralesResponse> response = (JAXBElement<ConsultarCompetenciasLaboralesResponse>) getWebServiceTemplate()
				.marshalSendAndReceive(defaultUri,
						new JAXBElement<ConsultarCompetenciasLaborales>(new QName("https://recursoshumanos.erpsaas", "consultarCompetenciasLaborales"),
								ConsultarCompetenciasLaborales.class,request),
						new SoapActionCallback("https://recursosHumanos.erpsaas/consultarCompetenciasLaborales"));

		return response.getValue();
	}
	
	public IngresarHojaDeVidaAspiranteResponse ingresarHojaVidaAspiranteWebService(String uuidTenant, IngresoHojaVidaDTO hojaVidaDTO ) {

		IngresarHojaDeVidaAspirante request = new IngresarHojaDeVidaAspirante();
		request.setArg0(uuidTenant);
		request.setArg1(hojaVidaDTO);

		log.info("Requesting for tenat:" + uuidTenant + " Candidato: " + hojaVidaDTO.getNombreCompleto());

		
		@SuppressWarnings("unchecked")
		JAXBElement<IngresarHojaDeVidaAspiranteResponse> response = (JAXBElement<IngresarHojaDeVidaAspiranteResponse>) getWebServiceTemplate()
				.marshalSendAndReceive("https://epalaciod:8182/RecursosHumanos/RecursosHumanos",
						new JAXBElement<IngresarHojaDeVidaAspirante>(new QName("https://recursoshumanos.erpsaas", "ingresarHojaDeVidaAspirante"),IngresarHojaDeVidaAspirante.class,request),
						new SoapActionCallback("https://recursosHumanos.erpsaas/ingresarHojaDeVidaAspirante"));

		return response.getValue();
	}

}
