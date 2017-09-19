package com.candidato.entity;

import java.util.ArrayList;

public class ContactoResponse {

	private Boolean success;
	 private String msg;
	 private String exception;
	 private ArrayList<Contacto> contacto;
	 private Integer exceptionCode;
	 
	 public ContactoResponse() {
	}

	/**
	 * @return the success
	 */
	public Boolean getSuccess() {
		return success;
	}

	/**
	 * @param success the success to set
	 */
	public void setSuccess(Boolean success) {
		this.success = success;
	}

	/**
	 * @return the msg
	 */
	public String getMsg() {
		return msg;
	}

	/**
	 * @param msg the msg to set
	 */
	public void setMsg(String msg) {
		this.msg = msg;
	}

	/**
	 * @return the exception
	 */
	public String getException() {
		return exception;
	}

	/**
	 * @param exception the exception to set
	 */
	public void setException(String exception) {
		this.exception = exception;
	}

	/**
	 * @return the contacto
	 */
	public ArrayList<Contacto> getContacto() {
		return contacto;
	}

	/**
	 * @param contacto the contacto to set
	 */
	public void setContacto(ArrayList<Contacto> contacto) {
		this.contacto = contacto;
	}

	/**
	 * @return the exceptionCode
	 */
	public Integer getExceptionCode() {
		return exceptionCode;
	}

	/**
	 * @param exceptionCode the exceptionCode to set
	 */
	public void setExceptionCode(Integer exceptionCode) {
		this.exceptionCode = exceptionCode;
	}
	 
	 
}
