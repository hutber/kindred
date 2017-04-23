import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../shared/logo/index';
import * as authStates from '../shared/auth/requireLogin';
import * as styles from './style.css';

class Home extends React.Component {
  componentWillMount() { // or componentDidMount
    authStates.requireLogin();
  }

  render(){
    return (
      <div className={styles.indexAppContent}>
        <h2>as</h2>
      </div>
    );
  }
}

export default Home;
