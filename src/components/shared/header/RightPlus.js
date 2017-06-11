//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles
import * as font from '../font/fontello.css';
import header from './Header.css';

class RightPlus extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
				<NavLink to={this.props.link} className={header.plusIcon}>
					<i className={font['icon-plus']}></i>
				</NavLink>
		)
	}
}

export default RightPlus;
