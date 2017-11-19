import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../../actions/sexPages/sexDataAction';
import Moment from 'moment';

//Styles
import formStyles from '../form/formItems.css';
import * as font from '../font/fontello.css';

class RightArrow extends React.Component {
	constructor(props){
		super(props)
	}
	render (){
		return (
			<div>
				<label htmlFor={this.props.label}>{this.props.label}</label>
				<div className={formStyles.info} id={this.props.label}>
          {this.props.rightText}
					<div className={formStyles.icon}>
						<i className={font['icon-right-small']}></i>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    dates: state.dates,
    desireKnobWheel: state.knobWheel
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(RightArrow);
