//Core App things
import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router';
import Splash from './components/Splash';

export default class Routes extends Component {
  render (){
        return (
            <div>
                <Route exact path="/" component={Splash}>
                </Route>
            </div>
        )
    }
};
