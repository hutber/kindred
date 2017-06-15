//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as dataAction from '../../actions/sexDataAction';

//Selection Items
import Knob from '../shared/Knob';

import mainStyles from '../shared/main.css';
import styles from './style.css';

class DesireSummary extends React.Component {
  constructor (props){
    super(props);
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
        <div className={`${mainStyles.contentAreaFullWidth} ${styles.summaryItems}`}>
        </div>
        <div>
          <Knob config={config} />
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(DesireSummary);
