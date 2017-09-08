package com.candidato.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "spring")
public class AlmacenarArchivoProperties {

    /**
     * Folder location for storing files
     */
	@Value("${spring.file.storage}")
    private String location;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

}
