package com.hojaDeVida.service;

public class StorageFileNotFoundException extends StorageException {

    /**
	 * SeriaL ID.
	 */
	private static final long serialVersionUID = 1752921491982304634L;

	public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}