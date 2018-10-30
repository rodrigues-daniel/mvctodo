import React from 'react';

class Entrada extends React.Component{

    constructor(props) {
         super(props);
         
         this.state = {texto:this.props.entrada.texto,marcado:this.props.entrada.marcado}

         this.handleChange = this.handleChange.bind(this);
         this.handleDelete = this.handleDelete.bind(this); 
         this.handleCheckBox = this.handleCheckBox.bind(this);        
	}

 
   
        handleDelete() {

          this.props.onDelete(this.props.entrada);
           
        }


        handleCheckBox(e){

            this.setState({texto:this.props.entrada.texto,marcado:e.target.checked})

            fetch(this.props.entrada._links.self.href,{
                method: 'PUT',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                 'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({texto:this.state.texto,marcado:e.target.checked})})
          .then(resposta => {
          
                return resposta.json();
   
           })
            .catch(function(err) { 
  
                 console.error(err); 
  
      }); 


        }


        
        handleChange(e) {             
            
            this.setState({texto:e.target.value,marcado:this.state.marcado})

            fetch(this.props.entrada._links.self.href,{
                  method: 'PUT',
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                   'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({texto:e.target.value,marcado:this.state.marcado})})
            .then(resposta => {
            
                  return resposta.json();
     
             })
              .catch(function(err) { 
    
                   console.error(err); 
    
        }); 
        
            
            
          }

        render() {
            return (
                <tr> 
                    <td>
                        <input type="checkbox" checked={this.state.marcado}  onChange={this.handleCheckBox} />
                    </td>                   
                    <td><input type="text"  onChange={this.handleChange}  value={this.state.texto} /></td>
                    <td>
                        <button onClick={this.handleDelete}>Apagar</button>
                    </td>                    
                </tr>
            )
        }
    }

export default Entrada;