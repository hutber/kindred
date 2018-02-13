import React from 'react';

import style from './style.css';

export default class Pin extends React.Component {
  constructor (props){
    super(props);
    console.info(this.props);
  }

	populatePin(){
		console.info(this.props);
		console.info('[p[');
	}

  render(){
    return (
      <div className={style.digit}>
	      {this.props.digit}
      </div>
    );
  }
}
