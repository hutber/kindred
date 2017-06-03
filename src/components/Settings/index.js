import React from 'react';
import {RequireLogin} from '../shared/auth/userRedirects'
import { NavLink } from 'react-router-dom'

//Header
import Header from '../shared/header/Header';
import HeaderRight from './right';
import Menu from '../shared/menu';

class Home extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header right={<HeaderRight />} />
        <RequireLogin />
        <NavLink to="/logout">Logout</NavLink>
        <Menu />
      </div>
    );
  }
}

export default Home;
