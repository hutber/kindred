//Core
import React from 'react';

//Styles
import mainStyles from '../main.css';



class DataBreak extends React.Component {
	render (){
		return (
			<div className={mainStyles.dataBreak}>
				<div>&nbsp;</div>
				<div>{this.props.text}</div>
			</div>
		)
	}
}

export default DataBreak;
