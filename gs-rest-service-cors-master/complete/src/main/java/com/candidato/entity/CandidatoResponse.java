package com.candidato.entity;

import https.recursoshumanos.IngresoHojaVidaDTO;

public class CandidatoResponse {

	 private Boolean success;
	 private String msg;
	 private String exception;
	 private IngresoHojaVidaDTO hojaVidaDto;
	 private Integer exceptionCode;
	 
	 public CandidatoResponse() {
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
	 * @return the hojaVidaDto
	 */
	public IngresoHojaVidaDTO getHojaVidaDto() {
		return hojaVidaDto;
	}

	/**
	 * @param hojaVidaDto the hojaVidaDto to set
	 */
	public void setHojaVidaDto(IngresoHojaVidaDTO hojaVidaDto) {
		this.hojaVidaDto = hojaVidaDto;
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
