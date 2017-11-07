import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'

//Styles
import * as font from '../font/fontello.css';
import header from './Header.css';

class Left extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
			<div onClick={this.props.link}>
					<i className={header.leftArrow + ' ' + font['icon-left-small']}></i>
			</div>
		)
	}
}
export default Left;
