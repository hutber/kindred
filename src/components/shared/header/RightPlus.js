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
			<div className={header.plusIcon}>
				<NavLink to={this.props.link}>
					<i className={font['icon-plus']}></i>
				</NavLink>
			</div>
		)
	}
}

export default RightPlus;
