//Core
import React from 'react';

//Styles
import formStyles from '../form/formItems.css';

class DataBreak extends React.Component {
	render (){
		return (
			<div className={formStyles.dataBreak + ' ' + formStyles.long}>
				<div>&nbsp;</div>
				<div>{this.props.text}</div>
			</div>
		)
	}
}

export default DataBreak;
