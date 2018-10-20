package br.todo.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TodoModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private boolean marcado;
	private boolean vazio;
	private String texto;
	
	public TodoModel(boolean marcado, boolean vazio, String texto) {
		super();
		this.marcado = marcado;
		this.vazio = vazio;
		this.texto = texto;
	}
	
	
	
	
	 

}
