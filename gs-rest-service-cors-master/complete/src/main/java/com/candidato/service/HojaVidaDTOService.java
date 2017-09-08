package com.candidato.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.candidato.entity.Candidato;
import com.candidato.entity.Competencia;

import https.recursoshumanos.CompetenciaWebDTO;
import https.recursoshumanos.IngresoHojaVidaDTO;

@Service
public class HojaVidaDTOService {

	@Value("${spring.rrhh.tipoid.tipoIdCompania}")
	private String tipoIdCompania;
	
	@Value("${spring.rrhh.id.idCompania}")
	private String idCompania;
	
	/**
	 * Crea el DTO para el envio del servicio a partir de la entidad.
	 * @param candidato entidad.
	 * @return DTO.
	 */
	public IngresoHojaVidaDTO getHojaVidaCandiatoDTO(Candidato candidato) {
		IngresoHojaVidaDTO hojaVidaDto = new IngresoHojaVidaDTO();
		hojaVidaDto.setNombreCompleto(candidato.getNombreApellidos());
		hojaVidaDto.setTelefono(candidato.getNumeroContacto());
		hojaVidaDto.setNivelIngles(candidato.isNivelIngles() ? "3" :  "1"); // TODO
		ArrayList<CompetenciaWebDTO> listaCompetencias = new ArrayList<>();
		if (candidato.getListCompetencia() != null) {			
			for (Competencia comp : candidato.getListCompetencia()) {
				CompetenciaWebDTO c = new CompetenciaWebDTO();
				c.setNivel("ALTO".equals(comp.getNivelCompetencia()) ? 3 : 0);// TODO
				c.setNombre(comp.getDescripcionCompetencia());
				listaCompetencias.add(c);
			}
		}
		hojaVidaDto.getCompetencias().addAll(listaCompetencias);
		hojaVidaDto.setIdCompania(idCompania);
		hojaVidaDto.setTipoIdCompania(tipoIdCompania);
		return hojaVidaDto;
	}
}
