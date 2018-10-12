import React, {Component} from 'react';

class Hackerspace extends Component{
	
    render(){
	return(
		
		<div>
		<div className='Hackerspace'>
			
             <div> 
                 <img src={this.props.img}/><br/>
                 <h2>{this.props.place}</h2>
               </div>
		</div>
		</div>
		

		);
}
}
export default Hackerspace;
