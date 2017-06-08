//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/dataAction';

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
    this.props.pushToDesire(this.props.desire)
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
    return (
      <div>
        <Header left={<LeftBack link="sextypeselection"/>} right={<RightSave save={this.saveButton} />} />
        <div className={mainStyles.verticalAlignParent}>
          <div className={styles.content + ' ' + mainStyles.verticalAlign}>
            <h1>Desire</h1>
            <p>{Moment(this.props.desire.date).format('MMMM Do YYYY')}</p>
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
    currentSexInfo: state.currentSexInfo,
    desire: state.desire
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Desire);
