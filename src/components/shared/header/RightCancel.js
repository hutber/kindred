//- Created by Hutber on 25/08/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom';

import header from './Header.css';

class RightCancel extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
			<div>
				<NavLink to={this.props.link} className={header.cancel}>Cancel</NavLink>
			</div>
		)
	}
}

export default RightCancel;
