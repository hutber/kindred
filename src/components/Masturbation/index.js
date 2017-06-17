//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as dataAction from '../../actions/sexDataAction';

//Selection Items
import Moment from 'moment';
import Menu from '../shared/menu';

//Header
import Header from '../shared/header/Header';
import LeftBack from '../shared/header/LeftBack';
import RightSave from '../shared/header/RightSave';

//styles
import mainStyles from '../shared/main.css';
import styles from './style.css';
import * as font from '../shared/font/fontello.css';

//textform elements
import DataBreak from '../shared/textForm/DataBreak'

class Masturbation extends React.Component {
  constructor (props){
    super(props);
    this.saveButton = this.saveButton.bind(this);
  }

  saveButton (){
    this.props.pushToDesire(this.props.KnobWheel);
    this.props.pushToDates(this.props.KnobWheel.date);
    this.props.history.push('sexsummary');
  }

  render (){
    return (
      <div>
        <Header left={<LeftBack link={this.props.history.goBack} />} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div className={mainStyles.dataItem}>
            <label htmlFor="date">Date</label>
            <div className={mainStyles.info} id="date">
              {Moment(this.props.KnobWheel.date).format('d MMMM YYYY')}
              <div className={mainStyles.icon}>
                <i className={font['icon-right-small']}></i>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentSexInfo: state.currentSexInfo,
    KnobWheel: state.KnobWheel
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(dataAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
