/**
 * Created by samuel on 6/10/16.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeColor } from '../actions/index'

class ColorPicker extends Component{
	constructor(){
		super(...arguments);
		this.props.changeColor("white");
	}


	render(){
		let selectedColor = {
			backgroundColor: this.props.color
		};

		return(
			<div>
				<div className="note-color-picker note-color-white cursor-pointer" onClick={() => this.props.changeColor('white')}></div>
				<div className="note-color-picker note-color-red cursor-pointer" onClick={() => this.props.changeColor('red')}></div>
				<div className="note-color-picker note-color-blue cursor-pointer"  onClick={() => this.props.changeColor('blue')}></div>
				<div className="note-color-picker note-color-yellow cursor-pointer"  onClick={() => this.props.changeColor('yellow')}></div>
				<div className="note-color-picker selected-color margin-left-50" style={selectedColor}></div>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { color: state.color }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({changeColor: changeColor}, dispatch)
};

export default connect (mapStateToProps, mapDispatchToProps)(ColorPicker)