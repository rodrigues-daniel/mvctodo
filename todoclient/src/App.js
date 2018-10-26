import React, { Component } from 'react';
import logo from './logo.svg';
import Lista from './Lista';
import dados from './dados.js'


class App extends Component {
  constructor(props){
    super(props); 


    this.state = dados._embedded ;
       
  }



  render() {

    return (
      
         
      <div className="container">  
        <div className="row">
          <div className="col-md-7 mx-auto">
              <h1 className="text-center">MVC Todo</h1> 

                <div class="card">
                   <div class="card-body">
                       
                
                      <Lista  itens={this.state.todoModels} />

                   </div>
                 </div>
                       
          </div>
           
        </div>
      </div>
          
    )     
  }
}
 
export default App;
