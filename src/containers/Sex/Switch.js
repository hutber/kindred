import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as masturbationAction from '../../actions/sexPages/masturbation/currentMasturbationAction';
import * as sexAction from '../../actions/sexPages/sex/currentSexAction';

//Styles
import formStyles from '../../components/shared/form/formItems.css';

class Switch extends React.Component {
	constructor(props){
		super(props)

		this.flickSwitch = this.flickSwitch.bind(this);
	}

  flickSwitch (event){
    if(!this.props[this.props.dataType].changed) {
    	console.info(this.props.dataType+'SetChanged');
      this.props[this.props.dataType+'SetChanged'](true);
    }
		this.props['set'+this.props.type](event.target.checked);
	}

	render (){
		return (
			<div className={`${formStyles.dataItem} ${this.props.bottom ? formStyles.bottom : ''}`}>
				<label htmlFor={this.props.label}>{this.props.type}?</label>
				<div className={formStyles.info}>
					<mobiscroll.Switch onChange={this.flickSwitch} value={this.props[this.props.dataType][this.props.type.toLowerCase()]} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    masturbation: state.masturbation.current,
    sex: state.sex.current,
  };
}

function matchDispatchToProps(dispatch){
  return {
    setToys : bindActionCreators(masturbationAction.setToys, dispatch),
    setPorn : bindActionCreators(masturbationAction.setPorn, dispatch),
    setProtection : bindActionCreators(sexAction.setProtection, dispatch),
    masturbationSetChanged: bindActionCreators(masturbationAction.setChanged, dispatch),
    sexSetChanged: bindActionCreators(sexAction.setChanged, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Switch);
