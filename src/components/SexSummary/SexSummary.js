//Core
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as desireAction from '../../actions/sexPages/desire/desireAction';
import * as datesAction from '../../actions/datesSexAction';

//Icons
import Heart from '../../components/shared/icons/heart';

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
	          <Heart height="80px" />
          </div>
          <div className={styles.itemContentArea}>
          </div>
        </div>
      </div>
    )
  }
}

export default SexSummary;
