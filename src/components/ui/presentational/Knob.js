import React from 'react'
import $, * as jQuery from 'jquery';
import knob from 'jquery-knob';

//styles
import style from '../../../../css/components/knob/logo.css';

class Knob extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			desire: 3,
			sex: 1
		}
	}
	
	updateDesire (event) {
		this.setState({'desire': Math.round(event)})
	}

	release (e) {
		console.info(e);
	}

	componentDidMount() {
		const { knob } = this.refs;

		this.props.config.change = this.updateDesire;
		this.props.config.release = this.release;
		
		$(knob).knob(this.props.config);
		$(knob)
			.val('3/10')
			.trigger('change');
	}
	
	componentWillUnmount() {
		const { knob } = this.refs;
		$(knob).knob('destroy');
	}
	
	render() {
		return (
			<div>
				<span className={style.konbHeader}>{this.state.desireCompReducer}/10</span>
				<div className={style.Knob}>
					<input ref="knob" />
				</div>
			</div>
		)
	}
}

export default Knob;
