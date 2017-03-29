import React from 'react';
//import NavLink from '../shared/nav/NavLink';
import { NavLink } from 'react-router-dom'
import Logo from '../shared/index/Logo';
import * as styles from './style.css';

class Splash extends React.Component {
  render(){
    return (
      <div className={styles.indexAppContent}>
        <NavLink to="/home"  className={styles.index}>
          <Logo />
        </NavLink>
      </div>
    );
  }
}

export default Splash;
