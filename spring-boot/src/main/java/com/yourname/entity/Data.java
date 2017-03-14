package com.yourname.entity;


public class Data {

	String status;
	Object data;
	public Data(String status, Object data) {
		this.status = status;
		this.data = data;		
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
}
