package br.todo.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TodoModel {

	@Id
	@GeneratedValue
	private Long id;

	private boolean marcado;
	private boolean vazio;
	private String texto;

	public boolean isMarcado() {
		return marcado;
	}

	public void setMarcado(boolean marcado) {
		this.marcado = marcado;
	}

	public boolean isVazio() {
		return vazio;
	}

	public void setVazio(boolean vazio) {
		this.vazio = vazio;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public TodoModel() {
	}

	public TodoModel(boolean marcado, boolean vazio, String texto) {

		this.marcado = marcado;
		this.vazio = vazio;
		this.texto = texto;
	}

}
