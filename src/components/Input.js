/**
 * Created by samuel on 6/10/16.
 */
import React, { Component } from 'react';
import AddNote from '../containers/AddNote';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer';
import Link from '../components/Link'

class InputBox extends Component{
	constructor(){
		super(...arguments);
		this.state = {inputType: true}
	}

	render(){
		if (this.state.inputType === true){
			return <div>
				<Link onClick={this.changeInputType.bind(this)} active={false} children={"Change input type"}/>
					<div> --- Add Note --- </div>
					<AddNote/>
				</div>
		}
		else {
			return (
				<div>
					<Link onClick={this.changeInputType.bind(this)} active={false} children={"Change input type"}/>
					<div> --- Add Todo --- </div>
					<TodoListContainer/>
					<AddTodo/>

				</div>
			)
		}
	}

	changeInputType(){
		this.setState({inputType: !this.state.inputType});
	}

}

class Input extends Component {

	constructor(){
		super(...arguments);
		this.state = { inputType: 0 }
	}


	render(){
		if (this.state.inputType === 0){}
		return (
			<div>
				<div>Input Component</div>
				<InputBox />
			</div>
		);
	}

}

export default Input;