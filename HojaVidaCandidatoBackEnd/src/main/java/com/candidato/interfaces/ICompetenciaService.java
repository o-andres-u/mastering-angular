package com.candidato.interfaces;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;
import com.candidato.entity.CompetenciaResponse;

public interface ICompetenciaService {

	CompetenciaResponse getCompetenciaCandidato();
	
	CandidatoResponse actualizarNivelCompetenciaCandidato (Candidato candidato);
}
