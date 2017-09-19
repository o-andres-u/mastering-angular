package com.candidato.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.candidato.Application;
import com.candidato.interfaces.IAlmacenarArchivoService;

@Service
public class AlmacenarArchivoService implements IAlmacenarArchivoService {

	private final Path rootLocation;

	private static Logger log = Logger.getLogger(Application.class);

	private Long MAX_SIZE_FILE = (long) (1 * 1024 * 1024);

	@Value("${file.type}")
	private String tipoArchivo;

	private List<String> listaTipoarchivo;

	@Autowired
	public AlmacenarArchivoService(AlmacenarArchivoProperties properties) {
		this.rootLocation = Paths.get(properties.getLocation());
	}

	@Override
	public void inicializarCarpetaAlmacenamiento() {
		try {
			Files.createDirectories(rootLocation);
		} catch (IOException e) {
			log.error(e);
			throw new AlmacenarArchivoException(0, "Could not initialize storage", e);
		}

	}

	@Override
	public void AlmacenarArchivo(MultipartFile file, String nombreArchivo) {
		listaTipoarchivo = Arrays.asList(tipoArchivo.split(","));
		String filename = StringUtils.cleanPath(nombreArchivo);
		try {
			if (file.isEmpty()) {
				log.error("El archivo a almacenar se encuentra vacio.");
				throw new AlmacenarArchivoException(1, "El archivo a almacenar se encuentra vacio " + filename);
			}
			if (!listaTipoarchivo.contains(file.getContentType())) {
				log.error("El archivo contiene una extensión incorrecta" + nombreArchivo);
				throw new AlmacenarArchivoException(2, "El archivo contiene una extensión incorrecta " + filename);
			}
			if (file.getSize() > MAX_SIZE_FILE) {
				log.error("El archivo supera el tamaño máximo permitido de 5MB");
				throw new AlmacenarArchivoException(3, "El archivo supera el tamaño máximo permitido de 5MB ");
			}
			Files.copy(file.getInputStream(), this.rootLocation.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
			log.info("Se almaceno el archivo: " + nombreArchivo);
		} catch (IOException e) {
			log.error(e);
			throw new AlmacenarArchivoException(4, "Failed to store file " + filename, e);
		}

	}

}
