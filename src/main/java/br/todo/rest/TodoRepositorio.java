package br.todo.rest;

 

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepositorio extends CrudRepository<TodoModel, Long> {
	
	

}
