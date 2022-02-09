import React, { Component} from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Bootstrap for react
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';



class App extends Component {
constructor(props) {
	super(props);

	// Setting up state
	this.state = {
	userInput : "",
	list:[]
	}
}

// Set a user input value
updateInput(value){
	this.setState({
	userInput: value,
	});
}

// Add item if user input in not empty
addItem(){
	 //event.preventDefault();
	if(this.state.userInput !== '' ){
	const userInput = {

		// Add a random id which is used to delete
		id : Math.random(),

		// Add a user value to list
		value : this.state.userInput
	};

	// Update list
	const list = [...this.state.list];
	list.push(userInput);

	// reset state
	this.setState({
		list,
		userInput:""
	});
	}
}

// Function to delete item from list use id to delete
deleteItem(key){
	const list = [...this.state.list];

	// Filter values and leave value which we need to delete
	const updateList = list.filter(item => item.id !== key);

	// Update list in state
	this.setState({
	list:updateList,
	});

}

render(){
	return(
        <div className="container">
        <div className="row">TODO LIST
        </div>
        <div className="row">
        <div className="col-sm-6">
       
        <div className="form-group mb-4 mt-4">          
            <input type="text" className="form-control" id="usr_firstname" value = {this.state.userInput} onChange = {item => this.updateInput(item.target.value)}  placeholder="add item . . . "/>
            
          </div>          
                
          <button className="btn btn-primary" onClick = {()=>this.addItem()}>Add</button>
       
        </div>
        </div>
         <div className="row">LIST
         <div className="col-sm-6">
         <ul className="list-group">
          {/* map over and print items */}
         {this.state.list.map(item => {return(
  			<li className="list-group-item" onClick = { () => this.deleteItem(item.id) }>{item.value}
  			 <button className="btn-success">EDIT</button> <button className="btn-danger">DELETE</button>
  			</li>
            
  
         )})}
		
		</ul>
        </div>
        </div>

        </div>
      
    );
}
}

export default App;
