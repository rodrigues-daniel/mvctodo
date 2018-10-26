import React,{Component} from 'react';


class Lista extends Component{

   constructor(props){
        super(props);       

       
        
       
        this.updateState = this.updateState.bind(this);
        this.keyEnter = this.keyEnter.bind(this);
       
     
   }

   updateState = e => {             
                   
            
       // this.setState({marcado: e.target.value});            
    
   }

   keyEnter = e => {

        if(e.keyCode === 13){
            
            e.preventDefault();            
            //this.setState({marcado:"",items:[...this.state.items,this.state.marcado]})

         }
   }   


   render(){

      return (    

          
          <table className="table">

              <tr>
                  <td>Marcador</td>
                  <td>
                      <input type="text"></input>
                  </td>
                  <td></td>
              </tr>

              {this.props.itens.map(item =>(

                  <tr>

                  <td>CheckBox</td>
                  <td key={item.id}>{item.texto}</td>
                  <td>Excluir</td>

                  </tr>

              ))}

          

          </table>
  
         )
    }   
  }

export default Lista;
