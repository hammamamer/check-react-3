import React, {Component} from 'react';

class Programe extends Component{
	
    render(){
	return(
		
		<div>
		<div className='Programe'>
			
             <div> 
               <h4>{this.props.prog}</h4>
               <p>{this.props.descrip}</p>
              
               
               <button>En savoir plus</button>
               
               </div>
		</div>
		</div>
		

		);
}
}
export default Programe;
