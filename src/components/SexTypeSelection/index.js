import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import RequireLogin from '../shared/auth/RequireLogin'
import * as currentSexData from '../../actions/currentSexInfo'
import Moment from 'moment';

//Header
import Header from '../shared/header/Header';
import RightCancel from '../shared/header/RightCancel';
import HeaderLeft from './left';
import Menu from '../shared/menu';

//Styles
import style from './style.css';
import * as font from '../../components/shared/font/fontello.css';

class Home extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div>
        <RequireLogin />
        <Header left={<HeaderLeft />} right={<RightCancel link="home" />} />
        <div>
          <div className={style.dateContainer}>
            <div className={style.date}>
              {Moment(this.props.currentSexInfo.date).format('MMMM Do YYYY')}
              <i className={font['icon-down-open-big']}></i>
            </div>
          </div>
          <NavLink to="/desire" className={style.selectionItem}>
            <div>
              <i className={font['icon-fire']}></i>
              <span>Desire</span>
              <i className={font['icon-right-open-big'] + ' ' + style['icon-right-open-big']}></i>
            </div>
          </NavLink>
          <NavLink to="/masturbation" className={style.selectionItem + ' ' + style.masturbation}>
            <div>
              <i className={font['icon-hand-paper-o']}></i>
              <span>Masturbation</span>
              <i className={font['icon-right-open-big'] + ' ' + style['icon-right-open-big']}></i>
            </div>
          </NavLink>
          <NavLink to="/sex" className={style.selectionItem + ' ' + style.sex}>
            <div>
              <i className={font['icon-heart-empty']}></i>
              <span>Sex</span>
              <i className={font['icon-right-open-big'] + ' ' + style['icon-right-open-big']}></i>
            </div>
          </NavLink>
        </div>
        <Menu />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { currentSexInfo: state.currentSexInfo };
}

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexInfo : bindActionCreators(currentSexData.changeCurrentSexInfo, dispatch)}
}

export default connect(mapStateToProps,matchDispatchToProps)(Home);
