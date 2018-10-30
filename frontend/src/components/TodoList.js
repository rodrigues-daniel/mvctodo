import  Entrada from './Entrada';
import React from 'react';

class TodoList extends React.Component {

       
	constructor(props) {
        super(props);       
            
            
        }     

 
        
      render() {

        const entradas = this.props.items.map(item => 

            <Entrada  key={item._links.self.href} entrada={item} onDelete={this.props.onDelete} />               
   
                )    

        return (       
             
       
				<tbody>	
					{entradas}
				</tbody>
		          
 
        ) 
      }}

      export default TodoList;