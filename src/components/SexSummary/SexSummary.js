//Core
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as dataAction from '../../actions/sexPages/sexDataAction';

//Icons
import Heart from '../../components/shared/icons/heart';

//Selection Items
import styles from './style.css';

class sexSummary extends React.Component {
  constructor(props) {
    super(props);
    this.IsEmpty = this.IsEmpty.bind(this);
  }

  IsEmpty() {
    if (this.props.data) {
      return (
        <div className={styles.itemContentArea}>
          <div className={``}>
            <p>Quantity: {this.props.data.orgasmQuantity}</p>
            <p>Quality: {this.props.data.orgasmQuality}/5</p>
            <p>Porn: {this.props.data.porn}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink to="sex">Click here to add Sex data for this date</NavLink>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={`${styles.item} ${styles.sexContainer}`}>
        <div className={styles.contentArea}>
          <div className={styles.iconArea}>
            <Heart height="80px" />
          </div>
          <div className={styles.itemContentArea}>
            <this.IsEmpty />
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return {
    pushToDesire: bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates: bindActionCreators(dataAction.pushToDates, dispatch)
  };
}

export default connect(null, matchDispatchToProps)(sexSummary);
