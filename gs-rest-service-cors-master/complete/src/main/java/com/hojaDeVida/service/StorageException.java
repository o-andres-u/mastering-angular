package com.hojaDeVida.service;

public class StorageException extends RuntimeException {

    /**
	 * Serial id.
	 */
	private static final long serialVersionUID = 7626077278963194786L;

	public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
