//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as dataAction from '../../actions/sexDataAction';
import Moment from 'moment';
import * as currentSexInfo from '../../actions/currentSexInfo'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';

//Selection Items
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
import RightArrow from '../shared/textForm/RightArrow'

class Masturbation extends React.Component {
  constructor (props){
    super(props);
    this.saveButton = this.saveButton.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  saveButton (){
    this.props.pushToDesire(this.props.KnobWheel);
    this.props.pushToDates(this.props.KnobWheel.date);
    this.props.history.push('sexsummary');
  }

  changeDate (){
    this.refs.time.instance.show();
  }

  render (){
    return (
      <div>
        <Header style="headerDark" middle="Masturbation" left={<LeftBack link={this.props.history.goBack} />} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div onClick={this.changeDate}>
            <RightArrow label="Date" rightText={Moment(this.props.KnobWheel.date).format('D MMMM YYYY')}/>
          </div>
          <mobiscroll.Datetime
            ref="time"
            lang="en"
            display="bottom"
            defaultValue={new Date(this.props.KnobWheel.date)}
            headerText={false}
          />
          <DataBreak />
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
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch),
    DispatchChangeCurrentSexInfo : bindActionCreators(currentSexInfo.changeCurrentSexInfo, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
