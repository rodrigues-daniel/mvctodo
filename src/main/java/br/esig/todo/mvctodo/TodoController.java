

package br.esig.todo.mvctodo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import br.esig.todo.mvctodo.TodoModel;

@RestController
public class TodoController {

    @Autowired
    TodoRepositorio repo;

  
  

          
    @GetMapping("/rest")
    List<TodoModel> all() {
		return repo.findAll();
	}
    
}