//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom'

//Styles
import * as font from '../font/fontello.css';
import header from './Header.css';

class Left extends React.Component {
	render (){
		return (
			<div>
				<NavLink to={this.props.link}>
					<i className={header.leftArrow + ' ' + font['icon-left-small']}></i>
				</NavLink>
			</div>
		)
	}
}

export default Left;
