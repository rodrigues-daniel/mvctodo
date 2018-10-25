package br.todo.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class TodoModel {

	@Id
	@GeneratedValue
	private Long id;

	private boolean marcado;
	private boolean vazio;
	private String texto;

	 

}
