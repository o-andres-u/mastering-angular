package com.candidato.service;

public class AlmacenarArchivoException extends RuntimeException {

    /**
	 * Serial id.
	 */
	private static final long serialVersionUID = 1L;

	private int codeExeption;
	
	public AlmacenarArchivoException(int codeException, String message) {
        super(message);
        this.codeExeption = codeException;
    }

    public AlmacenarArchivoException(int codeException, String message, Throwable cause) {
        super(message, cause);
        this.codeExeption = codeException;
    }

	/**
	 * @return the codeExeption
	 */
	public int getCodeExeption() {
		return codeExeption;
	}

	/**
	 * @param codeExeption the codeExeption to set
	 */
	public void setCodeExeption(int codeExeption) {
		this.codeExeption = codeExeption;
	}
    
    
}
