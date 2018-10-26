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
          <ul>

              {this.props.itens.map(item =>(

                  <li key={item.id}>{item.texto}</li>


              ))}

          </ul>
  
         )
    }   
  }

export default Lista;
