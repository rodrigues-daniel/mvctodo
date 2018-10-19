package br.esig.todo.mvctodo;

import javax.annotation.ManagedBean;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@ManagedBean
@Entity
public class TodoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;	
	private int marcado;	
	private String texString;

	
	public TodoModel(int marcado,String texString){

		this.marcado = marcado;
		this.texString = texString;

	}


}
