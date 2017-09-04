import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../../actions/sexDataAction';
import mobiscroll from '../../shared/mobiscroll/mobiscroll.custom';
import Moment from 'moment';

//Styles
import formStyles from '../form/formItems.css';
import * as font from '../font/fontello.css';

class RightArrowWithNumberInput extends React.Component {
	constructor(props){
		super(props)

    this.state = {
			adults: 1,
			children: 0,
			infants: 0,
			allowOverweight: false,
			weight: 30,
			stepperCons: 30,
			numpadCons: 30
		};
    this.childrenChange = function(value) {
      this.setState({children: value});
    }
    this.show = function() {
      this.refs.numpad.instance.show();
    }
    this.onSet = function(event, inst) {
      this.setState ({
        stepperCons: event.valueText
      });
    }
	}
	render (){
		return (
			<div>
				<label htmlFor={this.props.label}>{this.props.label}</label>
				<div className={formStyles.info} id={this.props.label}>
					<mobiscroll.Stepper theme="ios" type="number" data-role="stepper" max={15} data-val="left" value={this.state.children} onChange={this.childrenChange}>
						<label>Children</label>
						<span className="mbsc-desc">2-14 years</span>
					</mobiscroll.Stepper>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    sexDates: state.sexDates,
    KnobWheel: state.KnobWheel
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(RightArrowWithNumberInput);
