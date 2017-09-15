package com.candidato.interfaces;

import org.springframework.web.multipart.MultipartFile;

public interface IAlmacenarArchivoService {

	 void inicializarCarpetaAlmacenamiento();

	 void AlmacenarArchivo(MultipartFile file, String nombreArchivo);
}
