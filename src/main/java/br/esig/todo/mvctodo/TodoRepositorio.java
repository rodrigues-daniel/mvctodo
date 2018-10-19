package br.esig.todo.mvctodo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.esig.todo.mvctodo.TodoModel;

public interface TodoRepositorio extends JpaRepository <TodoModel,Long> {
	
	 }
