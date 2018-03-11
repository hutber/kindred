import React from 'react';

//Styles
import * as font from '../font/fontello.css';
import header from './Header.css';

class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onTouchTap={this.props.link}>
        <i className={header.leftArrow + ' ' + font['icon-left-small']} />
      </div>
    );
  }
}
export default Left;
