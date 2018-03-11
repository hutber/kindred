import React from 'react';
import header from './Header.css';

class RightSave extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={header.save} onTouchTap={this.props.save}>
        <p>Save</p>
      </div>
    );
  }
}

export default RightSave;
