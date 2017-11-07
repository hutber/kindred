//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom'

//Styles
import * as font from '../shared/font/fontello.css';
import header from '../../components/shared/header/Header.css';

class Left extends React.Component {
	render (){
		return (
			<div>
				<NavLink to="/home">
					<i className={header.leftArrow + ' ' + font['icon-left-small']}></i>
				</NavLink>
			</div>
		)
	}
}

export default Left;
