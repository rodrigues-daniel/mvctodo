package br.esig.todo.mvctodo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.esig.todo.models.TodoModel;

public interface TodoRepositorio extends CrudRepository <TodoModel,Long> {
	
	List<TodoModel> findByPosicao(int posicao);

}
