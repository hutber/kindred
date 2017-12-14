import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import RequireLogin from '../shared/auth/RequireLogin'
import Moment from 'moment';

//Header
import Header from '../shared/header/Header';
import RightCancel from '../shared/header/RightCancel';
import HeaderLeft from './left';
import Menu from '../shared/menu';

//Icons
import Fire from '../shared/icons/Fire';
import Hand from '../shared/icons/hand';
import Heart from '../shared/icons/heart';

//Styles
import mainStyles from '../shared/main.css';
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
        <div className={`${mainStyles.contentAreaFullWidth} ${mainStyles.flexWithChildren}`}>
          <div className={style.dateContainer}>
            <div className={style.date}>
              {Moment(this.props.currentDate).format('MMMM Do YYYY')}
              <i className={font['icon-down-open-big']}></i>
            </div>
          </div>
          <NavLink to="/desire" className={style.selectionItem}>
            <div>
              <Fire height="70px" />
              <span>Desire</span>
              <i className={font['icon-right-open-big'] + ' ' + style['icon-right-open-big']}></i>
            </div>
          </NavLink>
          <NavLink to="/masturbation" className={style.selectionItem + ' ' + style.masturbation}>
            <div>
                <Hand height="80px" />
              <span>Masturbation</span>
              <i className={font['icon-right-open-big'] + ' ' + style['icon-right-open-big']}></i>
            </div>
          </NavLink>
          <NavLink to="/sex" className={style.selectionItem + ' ' + style.sex}>
            <div>
                <Heart height="80px" />
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
  return {
	  currentDate: state.dates.currentDate,
  	dates: state.dates
  };
}

export default connect(mapStateToProps)(Home);
