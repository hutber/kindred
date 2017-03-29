//Core
import React from 'react';

//Styles
import data from '../../../../css/components/form/data.css';



class Title extends React.Component {
	render (){
		return (
			<div className={data.dataBreak}>
				{this.props.title}
			</div>
		)
	}
}

export default Title;
