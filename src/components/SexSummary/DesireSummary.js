//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/sexDataAction';

//Selection Items
import Knob from '../shared/Knob';

//Styles
import * as font from '../shared/font/fontello.css';
import main from '../shared/main.css';
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
      'width':'100%',
      'height':'110',
      'readOnly': true,
      'stopper': false,
      'inline': false,
      'lineCap':'round',
      'bgColor':'#2253EB',
      'fgColor':'#06FFF0'
    };
    return (
      <div className={`${styles.item} ${styles.knobContainer}`}>
        <div className={styles.contentArea}>
          <div className={styles.iconArea}>
            <i className={font['icon-fire']}></i>
          </div>
          <div className={styles.itemContentArea}>
            <div className={`${styles.knobText} ${main.verticalAlign}`}><div>{this.props.knob}</div>/10</div>
            <Knob config={config}/>
          </div>
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
