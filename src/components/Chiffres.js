import React, {Component} from 'react';



class Chiffre extends Component{
	
    render(){
	return(
		
		<div>
		   <h1>{this.props.chiffre}</h1>
		   <p>{this.props.descrip}</p>
		</div>
		

		);
}
}
export default Chiffre;
