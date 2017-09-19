package com.candidato;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;

import com.candidato.interfaces.IAlmacenarArchivoService;
import com.candidato.service.AlmacenarArchivoProperties;



@SpringBootApplication
@EnableAsync
@EnableConfigurationProperties(AlmacenarArchivoProperties.class)
public class Application extends SpringBootServletInitializer {
	
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
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
