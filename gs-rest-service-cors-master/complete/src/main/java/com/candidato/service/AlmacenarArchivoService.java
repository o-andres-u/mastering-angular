package com.candidato.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.candidato.Application;
import com.candidato.interfaces.IAlmacenarArchivoService;

@Service
public class AlmacenarArchivoService implements IAlmacenarArchivoService{

	private final Path rootLocation;
	
	private static Logger log = Logger.getLogger(Application.class);

    private Long MAX_SIZE_FILE = (long) (1*1024*1024);
	
    @Autowired
    public AlmacenarArchivoService(AlmacenarArchivoProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }
    
	@Override
	public void inicializarCarpetaAlmacenamiento() {
		try {
            Files.createDirectories(rootLocation);
        }
        catch (IOException e) {
        	log.error(e);
            throw new AlmacenarArchivoException("Could not initialize storage", e);
        }
		
	}

	@Override
	public void AlmacenarArchivo(MultipartFile file, String nombreArchivo) {
		 String filename = StringUtils.cleanPath(nombreArchivo);
	        try {
	            if (file.isEmpty()) {
	            	log.error("El archivo a almacenar se encuentra vacio.");
	                throw new AlmacenarArchivoException("El archivo a almacenar se encuentra vacio " + filename);
	            }
	            if (filename.contains("..")) {
	            	log.error("El archivo contiene una extensión incorrecta" + nombreArchivo);
	                throw new AlmacenarArchivoException(
	                        "El archivo contiene una extensión incorrecta "
	                                + filename);
	            }
	            if (file.getSize() > MAX_SIZE_FILE) {
	            	log.error("El archivo supera el tamaño máximo permitido de 5MB");
	                throw new AlmacenarArchivoException("El archivo supera el tamaño máximo permitido de 5MB ");
	            }
	            Files.copy(file.getInputStream(), this.rootLocation.resolve(filename),
	                    StandardCopyOption.REPLACE_EXISTING);
	            log.error("Se almaceno el archivo: " + nombreArchivo);
	        }
	        catch (IOException e) {
	        	log.error(e);
	            throw new AlmacenarArchivoException("Failed to store file " + filename, e);
	        }
		
	}

}
