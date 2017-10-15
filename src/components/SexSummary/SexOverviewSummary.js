//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as desireAction from '../../actions/sexPages/desire/desireAction';
import * as datesAction from '../../actions/datesSexAction';
import { formatSexData } from '../../functions/dates';

//Selection Items
import Moment from 'moment';
import Menu from '../shared/menu';

//Sex Summary
import DesireSummary from './DesireSummary'
import MasturbationSummary from './MasturbationSummary'
import SexSummary from './SexSummary'

//Header
import Header from '../shared/header/Header';
import HeaderLeft from '../shared/header/LeftBack';
import RightPlus from '../shared/header/RightPlus';

import mainStyles from '../shared/main.css';
import styles from './style.css';

class SexOverviewSummary extends React.Component {
  constructor (props){
    super(props);

    this.goHome = this.goHome.bind(this);
  }

  goHome (){
    this.props.history.push('home');
  }

  render (){
    const desire = this.props.desire.data[formatSexData(this.props.sexDates.currentDate)];
    return (
      <div>
        <Header left={<HeaderLeft link={this.goHome}/>} right={<RightPlus link="home"/>}/>
        <RequireLogin />
        <div className={`${mainStyles.contentAreaFullWidth} ${mainStyles.flexWithChildren} ${styles.itemContainers}`}>
          <div className={`${styles.dateArea}`}>
            <div>
              <h2>{Moment(this.props.current.currentDate).format('Do MMMM')}</h2>
              <p>Swipe right to delete an entry</p>
            </div>
          </div>
          <DesireSummary knob={desire}/>
          <MasturbationSummary />
          <SexSummary />
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sexDates: state.sexDates,
    current: state.desire.current,
    desire: state.desire
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(desireAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SexOverviewSummary);
