//- Created by Hutber on 23/04/2016.  */
//React
import React from 'react';
import NavLink from '../shared/nav/NavLink';

import style from '../../../css/ui/menu.css';
import * as font from '../../../css/font/fontello.css';

class Menu extends React.Component {
	constructor (props){
		super(props);
		this.state = {

		}
	}

	render (){
		return (
			<div className={style.menu}>
				<div>
					<NavLink to="/home" className={style.link}>
						<i className={font['icon-calendar']}></i>
						<span>Calendar</span>
					</NavLink>
					<NavLink to="/data" className={style.link}>
						<i className={font['icon-chart-bar']}></i>
						<span>Data</span>
					</NavLink>
					<NavLink to="/settings" className={style.link}>
						<i className={font['icon-cog']}></i>
						<span>Settings</span>
					</NavLink>
					<NavLink to="/more" className={style.link}>
						<i className={font['icon-dot-3']}></i>
						<span>More</span>
					</NavLink>
				</div>
			</div>
		)
	}
}

export default Menu;
