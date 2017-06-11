//- Created by hutber on 15/07/16.  */
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'

class BlockForLoggedInUsers extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const storage = localStorage.LOGGED_IN || 0;
    const loggedIn = Boolean(this.props.user.loggedIn || JSON.parse(JSON.stringify(storage)));
    if (loggedIn) {
      return (
        <Redirect push to="/home"/>
      )
    }else{
      return (
        <div></div>
      );
    }
  }
}


function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(BlockForLoggedInUsers);
