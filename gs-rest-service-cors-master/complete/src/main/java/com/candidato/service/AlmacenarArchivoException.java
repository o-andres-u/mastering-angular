package com.candidato.service;

public class AlmacenarArchivoException extends RuntimeException {

    /**
	 * Serial id.
	 */
	private static final long serialVersionUID = 1L;

	public AlmacenarArchivoException(String message) {
        super(message);
    }

    public AlmacenarArchivoException(String message, Throwable cause) {
        super(message, cause);
    }
}
