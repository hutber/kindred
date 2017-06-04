//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import * as font from '../shared/font/fontello.css';
import header from '../../components/shared/header/Header.css';

class Right extends React.Component {
	render (){
		return (
			<div>
				<Link to="/sextypeselection" className={header.plusIcon}>
					<i className={font['icon-plus']}></i>
				</Link>
			</div>
		)
	}
}

export default Right;
