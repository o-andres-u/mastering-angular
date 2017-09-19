package com.candidato.entity;

import java.util.ArrayList;

public class CompetenciaResponse {

	 private Boolean success;
	 private String msg;
	 private String exception;
	 private ArrayList<String> competencias;
	 private Integer exceptionCode;
	 
	 public CompetenciaResponse() {
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
	 * @return the competencias
	 */
	public ArrayList<String> getCompetencias() {
		return competencias;
	}

	/**
	 * @param competencias the competencias to set
	 */
	public void setCompetencias(ArrayList<String> competencias) {
		this.competencias = competencias;
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
