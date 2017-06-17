//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as dataAction from '../../actions/sexDataAction';

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
  }

  render (){
    const desire = this.props.sexData.desire[Moment(this.props.KnobWheel.date).format('MM-D-YYYY_h-mm')];
    return (
      <div>
        <Header left={<HeaderLeft link={this.props.history.goBack}/>} right={<RightPlus link="home"/>}/>
        <RequireLogin />
        <div className={`${mainStyles.contentAreaFullWidth} ${mainStyles.flexWithChildren} ${styles.itemContainers}`}>
          <div className={`${styles.dateArea}`}>
            <div>
              <h2>{Moment(this.props.KnobWheel.date).format('Do MMMM')}</h2>
              <p>Swipe right to delete an entry</p>
            </div>
          </div>
          <DesireSummary knob={desire.desire}/>
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
    currentSexInfo: state.currentSexInfo,
    KnobWheel: state.KnobWheel,
    sexData: state.sexData
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SexOverviewSummary);
