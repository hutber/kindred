//Core
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as desireAction from '../../actions/sexPages/desire/desireAction';
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

export default SexSummary;
