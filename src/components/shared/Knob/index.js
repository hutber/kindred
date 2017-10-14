import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import $, * as jQuery from 'jquery';
import knob from 'jquery-knob';

//Actions
import * as desireActions from '../../../actions/sexPages/desire/desireAction'
import * as desireCurrentAction from '../../../actions/sexPages/desire/desireCurrentAction'

//styles
import style from './index.css';

class Knob extends React.Component {
	constructor (props){
		super(props);
	}
	
	updateDesire = (event) => {
    this.props.setChanged(true);
		this.props.DispatchDesireLevel(Math.round(event))
	}

	componentDidMount() {
		const { knob } = this.refs;

		this.props.config.change = this.updateDesire;
		this.props.config.release = this.release;

		$(knob).knob(this.props.config);
		$(knob)
			.val(`${this.props.current.desire}/10`)
			.trigger('change');
	}
	
	componentWillUnmount() {
		const { knob } = this.refs;
		$(knob).knob('destroy');
	}
	
	render() {
		return (
			<div>
				<span className={style.KnobHeader}>{this.props.current.desire}/10</span>
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
    current: state.desire.current
  };
}

function matchDispatchToProps(dispatch){
  return {
  	DispatchDesireLevel : bindActionCreators(desireActions.changeDesireLevel, dispatch)
  	, DispatchDesireDate : bindActionCreators(desireActions.changeDesireDate, dispatch)
    , setChanged: bindActionCreators(desireCurrentAction.setChanged, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Knob);

