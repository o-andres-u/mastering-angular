package com.candidato.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.candidato.entity.Contacto;
import com.candidato.entity.ContactoResponse;
import com.candidato.interfaces.IContactoService;

@Service
public class ContactoService implements IContactoService{

	private ArrayList<Contacto> listaEspaniol = new ArrayList<>();
	
	private ArrayList<Contacto> listaIngles = new ArrayList<>();
	
	private final String LENGUAJE_ES = "ES";
	
	private final String LENGUAJE_EN = "EN";
	
	public ContactoService() {
		listaEspaniol.add(new Contacto("FCBK", "Facebook"));
		listaEspaniol.add(new Contacto("EVNT", "Eventos"));
		listaEspaniol.add(new Contacto("BSCD", "Buscadores"));
		listaEspaniol.add(new Contacto("RCMD", "Recomendado"));
		listaEspaniol.add(new Contacto("ELEM", "elempleo.com"));
		listaEspaniol.add(new Contacto("OTRO", "Otro"));
		listaEspaniol.add(new Contacto("LNKD", "LinkedIn"));
		
		listaIngles.add(new Contacto("EVNT", "Event"));
		listaIngles.add(new Contacto("BSCD", "Search Engines"));
		listaIngles.add(new Contacto("RCMD", "Recomended"));
		listaIngles.add(new Contacto("OTRO", "Other"));
	}
	@Override
	public ContactoResponse getContactos(String lenguaje) {
		ContactoResponse contactoResponse = new ContactoResponse();
		contactoResponse.setContacto(LENGUAJE_EN.equals(lenguaje.trim().toUpperCase()) ? listaIngles : listaEspaniol);
		contactoResponse.setSuccess(true);
		return contactoResponse;
	}

}
