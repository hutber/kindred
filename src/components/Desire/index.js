//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as desireAction from '../../actions/desireAction';
import * as datesAction from '../../actions/datesSexAction';

//Selection Items
import Moment from 'moment';
import Menu from '../shared/menu';
import Knob from '../shared/Knob';

//Header
import Header from '../shared/header/Header';
import LeftBack from '../shared/header/LeftBack';
import RightSave from '../shared/header/RightSave';

import mainStyles from '../shared/main.css';
import styles from './style.css';

class Desire extends React.Component {
  constructor (props){
    super(props);
    this.saveButton = this.saveButton.bind(this);
  }

  saveButton (){
    this.props.pushToDates(this.props.KnobWheel.currentDate);
    this.props.pushToDesire(this.props.KnobWheel);
    this.props.history.push('sexsummary');
  }

  render (){
    let config = {
      'min':0,
      'max':10,
      'thickness': .25,
      'width':'90%',
      'height':'250',
      'text':'jamie',
      'stopper': false,
      'inline': false,
      'lineCap':'round',
      'bgColor':'#2253EB',
      'fgColor':'#06FFF0',
      'displayInput': true,
      'fontWeight': 'bold',
      'displayPrevious': true
    };
    console.info(this.props.KnobWheel);
    return (
      <div>
        <Header left={<LeftBack link={this.props.history.goBack} />} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <div className={`${mainStyles.verticalAlignParent} ${styles.vertAlign}`}>
          <div className={styles.content + ' ' + mainStyles.verticalAlign}>
            <h1>Desire</h1>
            <p>{Moment(this.props.KnobWheel.currentDate).format('MMMM Do YYYY')}</p>
            <p>Drag the green bar around the <br /> wheel to set your desire rating</p>
            <Knob config={config} />
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    KnobWheel: state.KnobWheel
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(desireAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Desire);
