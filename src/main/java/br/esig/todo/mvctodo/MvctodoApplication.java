package br.esig.todo.mvctodo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;


import br.esig.todo.mvctodo.TodoRepositorio;

@SpringBootApplication
public class MvctodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MvctodoApplication.class, args);
	}


	/* @Bean
	public CommandLineRunner demo(TodoRepositorio repo) {

		return (args) -> {			 

			 
			
			 repo.save(new TodoModel(0,"ola mundo"));


		};

	}  */
}