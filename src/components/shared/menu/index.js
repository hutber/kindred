//- Created by Hutber on 23/04/2016.  */
//React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles
import style from './menu.css';
import mainStyles from '../main.css';
import icons from '../icons/style.css';

//Icons
import Data from '-!svg-react-loader!./data.svg';
import CalendarIcon from '-!svg-react-loader!./calendar.svg';
import MoreIcon from '-!svg-react-loader!./more.svg';
import SettingsIcon from '-!svg-react-loader!./Settings.svg';

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <div className={`${mainStyles.flexWithChildren} ${mainStyles.flexWithChildrenLTR}`}>
          <NavLink to="/home" className={style.link}>
            <div className={`${icons.iconContainer} ${style['data-icon']}`}>
              <CalendarIcon className={`${style.menuItem}`} />
            </div>
            <span>Calendar</span>
          </NavLink>
          <NavLink to="/data" className={style.link}>
            <div className={`${icons.iconContainer} ${style['data-icon']}`}>
              <Data className={`${style.menuItem}`} />
            </div>
            <span>Data</span>
          </NavLink>
          <NavLink to="/settings" className={style.link}>
            <div className={`${icons.iconContainer} ${style['data-icon']}`}>
              <SettingsIcon className={`${style.menuItem}`} />
            </div>
            <span>Settings</span>
          </NavLink>
          <NavLink to="/more" className={style.link}>
            <div className={`${icons.iconContainer} ${style['data-icon']}`}>
              <MoreIcon className={`${style.menuItem}`} />
            </div>
            <span>More</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Menu;
