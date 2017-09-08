package com.candidato.entity;

/**
 * Clase que representa una competencia de un candidato.
 * @author alejandropalacio
 *
 */
public class Competencia {

	/** Nivel de la competencia del candidato.*/
	private String nivelCompetencia;
	
	/** Descripcion de la competencia. */
	private String descripcionCompetencia;
	
	/**
	 * Constructor de la clase.
	 * @param nivelCompetencia nivel de la competencia.
	 * @param descripcionCompetencia descripcion de la competencia.
	 */
	public Competencia(String nivelCompetencia, String descripcionCompetencia) {
		super();
		this.nivelCompetencia = nivelCompetencia;
		this.descripcionCompetencia = descripcionCompetencia;
	}

	/**
	 * Constuctor por Defecto de la clase.
	 */
	public Competencia() {}
	
	/**
	 * @return the nivelCompetencia
	 */
	public String getNivelCompetencia() {
		return nivelCompetencia;
	}

	/**
	 * @param nivelCompetencia the nivelCompetencia to set
	 */
	public void setNivelCompetencia(String nivelCompetencia) {
		this.nivelCompetencia = nivelCompetencia;
	}

	/**
	 * @return the descripcionCompetencia
	 */
	public String getDescripcionCompetencia() {
		return descripcionCompetencia;
	}

	/**
	 * @param descripcionCompetencia the descripcionCompetencia to set
	 */
	public void setDescripcionCompetencia(String descripcionCompetencia) {
		this.descripcionCompetencia = descripcionCompetencia;
	}
	
	
}
