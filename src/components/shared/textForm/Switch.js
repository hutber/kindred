import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../../actions/sexDataAction';
import mobiscroll from '../../shared/mobiscroll/mobiscroll.custom';

//Styles
import mainStyles from '../main.css';

class Switch extends React.Component {
	constructor(props){
		super(props)
	}
	render (){
		return (
			<div className={mainStyles.dataItem}>
				<label htmlFor={this.props.label}>{this.props.label}</label>
				<div className={mainStyles.info}>
					<mobiscroll.Switch value={this.props.val} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    currentSexInfo: state.currentSexInfo,
    KnobWheel: state.KnobWheel
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Switch);
