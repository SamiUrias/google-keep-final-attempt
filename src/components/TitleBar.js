/**
 * Created by samuel on 11/10/16.
 */
import React, { Component } from 'react'

class TitleBar extends Component {
	constructor(){
		super(...arguments)
	}

	render(){

		return(
			<div className="title-bar">
				<p className="title-text">Google Keep</p>

			</div>
		)
	}
}

export default TitleBar;