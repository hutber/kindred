//Core
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as desireAction from '../../actions/desireAction';
import * as datesAction from '../../actions/datesSexAction';

//Selection Items
import * as font from '../shared/font/fontello.css';
import styles from './style.css';

class SexSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.item} ${styles.sexContainer}`}>
        <div className={styles.contentArea}>
          <div className={styles.iconArea}>
            <i className={font['icon-heart-empty']}></i>
          </div>
          <div className={styles.itemContentArea}>
          </div>
        </div>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return {
    pushToDesire : bindActionCreators(desireAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(SexSummary);
