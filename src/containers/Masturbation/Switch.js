import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as dataAction from '../../actions/sexPages/masturbation/currentMasturbationAction';
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Styles
import formStyles from '../../components/shared/form/formItems.css';

class Switch extends React.Component {
	constructor(props){
		super(props)

		this.flickSwitch = this.flickSwitch.bind(this);
	}

  flickSwitch (event){
		this.props.setChanged(true);
		this.props['set'+this.props.type](event.returnValue);
	}

	render (){
		return (
			<div className={formStyles.dataItem}>
				<label htmlFor={this.props.label}>{this.props.type}?</label>
				<div className={formStyles.info}>
					<mobiscroll.Switch onChange={this.flickSwitch} value={this.props.masturbation[this.props.type.toLowerCase()]} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    masturbation: state.masturbation.current,
  };
}

function matchDispatchToProps(dispatch){
  return {
    setToys : bindActionCreators(dataAction.setToys, dispatch),
    setPorn : bindActionCreators(dataAction.setPorn, dispatch),
    setChanged: bindActionCreators(dataAction.setChanged, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Switch);
