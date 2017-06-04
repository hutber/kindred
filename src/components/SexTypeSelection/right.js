//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles
import * as font from '../shared/font/fontello.css';
import header from '../../components/shared/header/Header.css';

class Right extends React.Component {
	render (){
		return (
			<div>
				<NavLink to="/sextypeselection" className={header.plusIcon}>
					<i className={font['icon-plus']}></i>
				</NavLink>
			</div>
		)
	}
}

export default Right;
