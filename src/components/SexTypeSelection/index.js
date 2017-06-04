import React from 'react';
import { bindActionCreators } from 'redux'
import { RequireLogin } from '../shared/auth/userRedirects'
import * as currentSexData from '../../actions/currentSexData'
import {connect} from 'react-redux';

//Header
import Header from '../shared/header/Header';
import HeaderRight from './right';
import HeaderLeft from './left';
import Menu from '../shared/menu';

//Styles
import HomeStyle from './style.css';

class Home extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div>
        <RequireLogin />
        <Header left={<HeaderLeft />} right={<HeaderRight />} />
        <div className={HomeStyle.home}>
          <div className="pageInfo">
            <h1>My calender</h1>
            <p>Select a date to view <br/> input your information</p>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexDate : bindActionCreators(currentSexData.changeCurrentSexDate, dispatch)}
}

export default connect(null,matchDispatchToProps)(Home);
