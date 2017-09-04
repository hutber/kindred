import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as desireActions from '../../../actions/KnobWheelAction'
import $, * as jQuery from 'jquery';
import knob from 'jquery-knob';

//styles
import style from './index.css';

class Knob extends React.Component {
	constructor (props){
		super(props);
	}
	
	updateDesire = (event) => {
		this.props.DispatchDesireLevel(Math.round(event))
	}

	componentDidMount() {
    // this.props.DispatchDesireDate(this.props.sexDates.currentDate);

		const { knob } = this.refs;

		this.props.config.change = this.updateDesire;
		this.props.config.release = this.release;

		$(knob).knob(this.props.config);
		$(knob)
			.val(`${this.props.KnobWheel.desire}/10`)
			.trigger('change');
	}
	
	componentWillUnmount() {
		const { knob } = this.refs;
		$(knob).knob('destroy');
	}
	
	render() {
		return (
			<div>
				<span className={style.konbHeader}>{this.props.KnobWheel.desire}/10</span>
				<div className={style.Knob}>
					<input ref="knob" />
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
  	DispatchDesireLevel : bindActionCreators(desireActions.changeDesireLevel, dispatch)
  	, DispatchDesireDate : bindActionCreators(desireActions.changeDesireDate, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Knob);

