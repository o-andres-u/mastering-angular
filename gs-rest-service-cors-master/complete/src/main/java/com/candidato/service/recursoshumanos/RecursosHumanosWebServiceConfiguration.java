
package com.candidato.service.recursoshumanos;

import org.apache.http.auth.UsernamePasswordCredentials;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.ws.transport.http.HttpComponentsMessageSender;

@Configuration
public class RecursosHumanosWebServiceConfiguration {

//	 @Value("${client.user.name}")
	  private String name = "recursoshumanos";

//	  @Value("${client.user.password}")
	  private String password = "recurs0shuman0s";
	  
//	  @Value("${client.user.uri}")
	  private String urlWebService = "https://epalaciod:8182/RecursosHumanos/RecursosHumanos";
	  

	@Bean
	public Jaxb2Marshaller marshaller() {
		Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
		// this package must match the package in the <generatePackage> specified in
		// pom.xml
		marshaller.setContextPath("https.recursoshumanos");
		return marshaller;
	}

	@Bean
	public RecursosHumanosWebServiceClient getRecursosHumanosClient(Jaxb2Marshaller marshaller) {
		RecursosHumanosWebServiceClient client = new RecursosHumanosWebServiceClient();
		client.setDefaultUri(urlWebService);
		client.setMarshaller(marshaller);
		client.setUnmarshaller(marshaller);
		client.setMessageSender(httpComponentsMessageSender());
		return client;
	}
	
	@Bean
	  public HttpComponentsMessageSender httpComponentsMessageSender() {
	    HttpComponentsMessageSender httpComponentsMessageSender = new HttpComponentsMessageSender();
	    // set the basic authorization credentials
	    httpComponentsMessageSender.setCredentials(usernamePasswordCredentials());

	    return httpComponentsMessageSender;
	  }

	  @Bean
	  public UsernamePasswordCredentials usernamePasswordCredentials() {
	    // pass the user name and password to be used
	    return new UsernamePasswordCredentials(name, password);
	  }

}
