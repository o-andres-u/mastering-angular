package com.candidato.entity;

import java.util.ArrayList;

/**
 * Clase que representa un candidato.
 * @author alejandropalacio
 *
 */
public class Candidato {
	
	/** Id candidato.*/
	private String idCandidato;
	
	/** Nombre y apellidos del candidato.*/
	private String nombreApellidos;
	
	/** Numero de contacto. */
	private String numeroContacto;
	
	/** Booleano que indica si tiene o no un nivel alto de ingles. */
	private boolean nivelIngles;
	
	/** Nombre del archivo de la hoja de vida. */
	private String hojaVida;
	
	/** Forma de contacto de contacto.*/
	private String origenContacto;
	
	/** Descripcion forma de contacto.*/
	private String descripcionOrigenContacto;
	
	/** Lista de competencias del candidato. */
	private ArrayList<Competencia> listCompetencia;
	
	/**
	 * Constructor de la clase.
	 * @param nombreApellidos nombre y apellidos.
	 * @param numeroContacto numero de contacto.
	 * @param nivelIngles nivel de ingles.
	 * @param hojaVida nombre del archivo de la hoja de vida.
	 * @param listCompetencia lista de competencias.
	 */
	public Candidato(String nombreApellidos, String numeroContacto, boolean nivelIngles, String hojaVida,
			ArrayList<Competencia> listCompetencia) {
		super();
		this.nombreApellidos = nombreApellidos;
		this.numeroContacto = numeroContacto;
		this.nivelIngles = nivelIngles;
		this.hojaVida = hojaVida;
		this.listCompetencia = listCompetencia;
	}
	
	/**
	 * Constuctor por Defecto de la clase.
	 */
	public Candidato() {}

	/**
	 * @return the nombreApellidos
	 */
	public String getNombreApellidos() {
		return nombreApellidos;
	}

	/**
	 * @param nombreApellidos the nombreApellidos to set
	 */
	public void setNombreApellidos(String nombreApellidos) {
		this.nombreApellidos = nombreApellidos;
	}

	/**
	 * @return the numeroContacto
	 */
	public String getNumeroContacto() {
		return numeroContacto;
	}

	/**
	 * @param numeroContacto the numeroContacto to set
	 */
	public void setNumeroContacto(String numeroContacto) {
		this.numeroContacto = numeroContacto;
	}

	/**
	 * @return the nivelIngles
	 */
	public boolean isNivelIngles() {
		return nivelIngles;
	}

	/**
	 * @param nivelIngles the nivelIngles to set
	 */
	public void setNivelIngles(boolean nivelIngles) {
		this.nivelIngles = nivelIngles;
	}

	/**
	 * @return the hojaVida
	 */
	public String getHojaVida() {
		return hojaVida;
	}

	/**
	 * @param hojaVida the hojaVida to set
	 */
	public void setHojaVida(String hojaVida) {
		this.hojaVida = hojaVida;
	}

	/**
	 * @return the listCompetencia
	 */
	public ArrayList<Competencia> getListCompetencia() {
		return listCompetencia;
	}

	/**
	 * @param listCompetencia the listCompetencia to set
	 */
	public void setListCompetencia(ArrayList<Competencia> listCompetencia) {
		this.listCompetencia = listCompetencia;
	}

	/**
	 * @return the idCandidato
	 */
	public String getIdCandidato() {
		return idCandidato;
	}

	/**
	 * @param idCandidato the idCandidato to set
	 */
	public void setIdCandidato(String idCandidato) {
		this.idCandidato = idCandidato;
	}

	/**
	 * @return the origenContacto
	 */
	public String getOrigenContacto() {
		return origenContacto;
	}

	/**
	 * @param origenContacto the origenContacto to set
	 */
	public void setOrigenContacto(String origenContacto) {
		this.origenContacto = origenContacto;
	}

	/**
	 * @return the descripcionOrigenContacto
	 */
	public String getDescripcionOrigenContacto() {
		return descripcionOrigenContacto;
	}

	/**
	 * @param descripcionOrigenContacto the descripcionOrigenContacto to set
	 */
	public void setDescripcionOrigenContacto(String descripcionOrigenContacto) {
		this.descripcionOrigenContacto = descripcionOrigenContacto;
	}

}
