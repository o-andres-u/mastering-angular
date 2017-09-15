package com.candidato;

import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;

import com.candidato.interfaces.IAlmacenarArchivoService;
import com.candidato.service.AlmacenarArchivoProperties;



@SpringBootApplication
@EnableAsync
@EnableConfigurationProperties(AlmacenarArchivoProperties.class)
public class Application {

	private static Logger log = Logger.getLogger(Application.class);
	
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(final IAlmacenarArchivoService storageService) {
        return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
		           storageService.inicializarCarpetaAlmacenamiento();
		           
			}
		};
    }   
}
