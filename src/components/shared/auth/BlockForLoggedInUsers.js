//- Created by hutber on 15/07/16.  */
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'

class BlockForLoggedInUsers extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const loggedIn = this.props.user.loggedIn;
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
    user: state.user.auth
  };
}

export default connect(mapStateToProps)(BlockForLoggedInUsers);
