package com.yourname.entity;

public class Restaurante {

    private int id;
    private String nombre;
    private String direccion;
    private String descripcion;
    private String imagen;
    private String precio;

    public Restaurante(int id, String name, String direccion, String descripcion, String imagen, String precio) {
        this.id = id;
        this.nombre = name;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }

    public Restaurante(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

   
    
}
