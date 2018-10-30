package br.todo.rest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderBy;

import lombok.Data;

@Data
@Entity
public class TodoModel {

	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	private Long id;   
	private boolean marcado;	
	private String texto;

	 

}
