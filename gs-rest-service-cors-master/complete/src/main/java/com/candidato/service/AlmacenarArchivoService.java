package com.candidato.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.candidato.interfaces.IAlmacenarArchivoService;

@Service
public class AlmacenarArchivoService implements IAlmacenarArchivoService{

	private final Path rootLocation;

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
            throw new AlmacenarArchivoException("Could not initialize storage", e);
        }
		
	}

	@Override
	public void AlmacenarArchivo(MultipartFile file) {
		 String filename = StringUtils.cleanPath(file.getOriginalFilename());
	        try {
	            if (file.isEmpty()) {
	                throw new AlmacenarArchivoException("Failed to store empty file " + filename);
	            }
	            if (filename.contains("..")) {
	                // This is a security check
	                throw new AlmacenarArchivoException(
	                        "Cannot store file with relative path outside current directory "
	                                + filename);
	            }
	            Files.copy(file.getInputStream(), this.rootLocation.resolve(filename),
	                    StandardCopyOption.REPLACE_EXISTING);
	        }
	        catch (IOException e) {
	            throw new AlmacenarArchivoException("Failed to store file " + filename, e);
	        }
		
	}

}
