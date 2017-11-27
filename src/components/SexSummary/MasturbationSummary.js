//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/sexPages/sexDataAction';

//Selection Items
import * as font from '../shared/font/fontello.css';
import styles from './style.css';

class MasturbationSummary extends React.Component {
  constructor (props){
    super(props);
    console.info('props', props.data);
	  this.IsEmpty = this.IsEmpty.bind(this);
  }

	IsEmpty() {
		if (this.props.data) {
			return <div className={styles.itemContentArea}>
				<div className={``}>
					<p>Quantity: {this.props.data.data.quantity}</p>
					<p>Quality: {this.props.data.data.quality}/5</p>
					<p>Porn: {this.props.data.data.porn}</p>
				</div>
			</div>
		} else {
			return <div>
				<NavLink to="masturbation">
					Click here to add Masturbation data for this date
				</NavLink>
			</div>
		}
	}

  render (){
    return (
      <div className={`${styles.item} ${styles.masturbationContainer}`}>
        <div className={styles.contentArea}>
          <div className={styles.iconArea}>
            <i className={font['icon-hand-paper-o']}></i>
          </div>
          <div className={styles.itemContentArea}>
	          <this.IsEmpty />
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
