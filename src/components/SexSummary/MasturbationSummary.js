//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/sexDataAction';

//Selection Items
import * as font from '../shared/font/fontello.css';
import styles from './style.css';

class MasturbationSummary extends React.Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <div className={`${styles.item} ${styles.masturbationContainer}`}>
        <div className={styles.contentArea}>
          <div className={styles.iconArea}>
            <i className={font['icon-hand-paper-o']}></i>
          </div>
          <div className={styles.itemContentArea}>
          </div>
        </div>
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

export default connect(null, matchDispatchToProps)(MasturbationSummary);
