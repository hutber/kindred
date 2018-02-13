import React from 'react';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();

//Store and Routes
import configureStore from './configureStore';
import Routes from './routes';


export default class AppProvider extends React.Component {

  constructor() {
    super()
    this.state = { rehydrated: false }

  }

  componentWillMount(){
    persistStore(configureStore, {}, () => {
      this.setState({ rehydrated: true })
	    window.localStorage.setItem('firstReload', true);
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
      <Provider store={configureStore}>
        <ConnectedRouter history={history}>
          <Routes history={history}/>
        </ConnectedRouter>
      </Provider>
    )
  }
}
