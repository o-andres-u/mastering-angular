package com.candidato.interfaces;

import org.springframework.web.multipart.MultipartFile;

import com.candidato.entity.Candidato;
import com.candidato.entity.CandidatoResponse;

public interface ICandidatoService {

	CandidatoResponse almacenarCandidato (MultipartFile workgroupsUsersFile, Candidato candidato);
	
}
