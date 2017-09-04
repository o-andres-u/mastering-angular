package com.hojaDeVida.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.hojaDeVida.entity.Candidato;
import com.hojaDeVida.entity.Competencia;

@Service
public class HojaDeVidaService {
	
	private static Map<String, Candidato> data;
	private static ArrayList<Competencia> listCompetencia;

    static {

    	listCompetencia = new ArrayList<Competencia>();
    	listCompetencia.add(new Competencia("bajo", "Java"));
    	
    	data = new HashMap<String, Candidato>(){
            {
            	put("Alejo", new Candidato("Alejo", "619619", false, "Alejo.pdf", listCompetencia));
            }
        };
    }
    
    public Candidato getCandidatoByName(String name) {
    		return this.data.get(name);
    }
    
    public void insertCandidato(Candidato candidato) {
    		this.data.put(candidato.getNombreApellidos(), candidato);
}

}
