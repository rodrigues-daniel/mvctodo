package br.todo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TodoRecurso {
	
	@Autowired
	private TodoRepositorio todorepositorio;
	
	@GetMapping("/entradas")
	public List<TodoModel> obterEntradas(){
		
		return todorepositorio.findAll();
		
	}
	
	
	 

}
