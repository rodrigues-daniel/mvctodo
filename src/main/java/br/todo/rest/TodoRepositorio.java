package br.todo.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepositorio extends JpaRepository<TodoModel, Long> {

}
