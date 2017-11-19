import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../../actions/sexPages/sexDataAction';
import mobiscroll from '../../shared/mobiscroll/mobiscroll.custom';
import Moment from 'moment';

//Styles
import formStyles from '../form/formItems.css';
import * as font from '../font/fontello.css';

class RightArrowWithNumberInput extends React.Component {
	constructor(props){
		super(props)

    this.state = {
			masturbation: 0,
		};

		this.changeStepper = this.changeStepper.bind(this);
	}

  changeStepper = function(value) {
		console.info(value);
    this.state.masturbation = value;
  };

	render (){
		console.info(this.state.masturbation);
		return (
			<div>
				<label htmlFor={this.props.label}>{this.props.label}</label>
				<div className={formStyles.info} id={this.props.label}>
					<mobiscroll.Number type="number" data-role="stepper" min={0} max={15} data-val="left" value={this.state.masturbation} onChange={this.changeStepper} />
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

export default connect(mapStateToProps, matchDispatchToProps)(RightArrowWithNumberInput);
