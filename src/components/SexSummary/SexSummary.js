//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/sexDataAction';

//Selection Items
import * as font from '../shared/font/fontello.css';
import styles from './style.css';

class SexSummary extends React.Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <div>
        <div className={styles.iconArea}>
          <i className={font['icon-left-small']}></i>
        </div>
        <p>Swipe right to delete an entry</p>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(SexSummary);
