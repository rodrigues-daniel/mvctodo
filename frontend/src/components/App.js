import React, { Component } from 'react';
import TodoList  from './TodoList';

class App extends Component{  

    
    constructor(props) {
        super(props);

        this.state = { todomodels: [],texto:'',dados: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
        this.httpPost = this.httpPost.bind(this);
        this.httpGet = this.httpGet.bind(this);
        this.httpDelete = this.httpDelete.bind(this);

       
      }

      componentDidMount() {                   
          

         this.httpGet('http://localhost:8080/api/todoModels');

      } 

//--------------- GET ----------------------
     
     httpGet(url){

        fetch(url,{"method":"GET"})
        .then(resposta => {

        return resposta.json();

        })
        .then(dados => {

             this.setState({todomodels: dados._embedded.todoModels});
               

      })
       .catch(function(err) { 

          console.error(err); 

       });


    };

//--------------- POST ----------------------

    httpPost(post){

          fetch(post.url,{
                method: 'POST',
                headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                },
                body: JSON.stringify(post.nova_entrada)
        })
        .then(resposta => {

            
            return resposta.json();

        })        
        .catch(function(err) { 

            console.error(err); 

        }); 
      }


 

//--------------- DELETE ----------------------


    
    httpDelete(entrada){

    fetch(entrada._links.self.href,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }})
    .then(resposta => {
        
        return resposta.json();

    })
     .catch(function(err) { 

        console.error(err); 

    }); 
  }




      handleSubmit (){
          alert("submit!");
      }



      handleChange(e) {

        this.setState({texto: e.target.value });

      }
    
      handleSubmit(e) {

        e.preventDefault();

        
        
        if (!this.state.texto.length) {
          return;
        }    

           
       this.httpPost({
                        url:'http://localhost:8080/api/todoModels',
                        nova_entrada:{
                            marcado:false,                            
                            texto:this.state.texto
                            }

                     });
         
           
        
 
      }
        
    
    render() {
        return (

          <tbody>

          <main role="main" class="container">
         
                 
       
         
          
            <h3>Todo List</h3>          
            <form onSubmit={this.handleSubmit}>      
           
              <input type="checkbox" value="true" /> 
              <input   onChange={this.handleChange}  value={this.state.texto} />
             
             
              <TodoList items={this.state.todomodels}  onDelete={this.httpDelete} />                 
            

          
            </form>
 

        </main>
        

        </tbody>
        
        
        );
      }
    
    
      
    }

export default App;