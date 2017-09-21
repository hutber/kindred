//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as masturbationAction from '../../actions/sexPages/currentMasturbationAction';

//styles
import styles from './style.css';
import formStyles from '../shared/form/formItems.css';
import * as font from '../shared/font/fontello.css';

class Tags extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      tagsSearch: ''
    };
  }

  searchTags (event){
    this.setState({tagsSearch: event.target.value});
  }

  render (){
    return (
      <div>
        <div className={formStyles.preTitle}>
          <div className={formStyles.inLineTitle}>
            <div>Tags</div>
          </div>
          <div className={styles.searchContainer}>
            <i className={font['icon-search']}></i>
            <input
              type="text"
              value={this.state.tagsSearch}
              className={styles.tagInput}
              onChange={this.searchTags}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sexDates: state.sexDates,
    masturbation: state.currentMasturbation
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeDate : bindActionCreators(datesAction.changeCurrentSexDate, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(masturbationAction.setOrgasmQuantity, dispatch),
    DispatchOrgasmQuality: bindActionCreators(masturbationAction.setOrgasmQuality, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Tags);
