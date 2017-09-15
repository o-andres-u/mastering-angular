package com.candidato.entity;

public class Contacto {

	private String codigoOrigen;
	private String descripcionOrigen;
	
	public Contacto() {
	}
	
	public Contacto(String codigoOrigen, String descripcionOrigen) {
		this.codigoOrigen = codigoOrigen;
		this.descripcionOrigen = descripcionOrigen;
	}

	/**
	 * @return the codigoOrigen
	 */
	public String getCodigoOrigen() {
		return codigoOrigen;
	}

	/**
	 * @param codigoOrigen the codigoOrigen to set
	 */
	public void setCodigoOrigen(String codigoOrigen) {
		this.codigoOrigen = codigoOrigen;
	}

	/**
	 * @return the descripcionOrigen
	 */
	public String getDescripcionOrigen() {
		return descripcionOrigen;
	}

	/**
	 * @param descripcionOrigen the descripcionOrigen to set
	 */
	public void setDescripcionOrigen(String descripcionOrigen) {
		this.descripcionOrigen = descripcionOrigen;
	}

	
}
