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
import Switch from '../shared/textForm/Switch'

class Masturbation extends React.Component {
  constructor (props){
    super(props);
    this.saveButton = this.saveButton.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.openDate = this.openDate.bind(this);
  }

  saveButton (){
    this.props.pushToDesire(this.props.KnobWheel);
    this.props.pushToDates(this.props.KnobWheel.date);
    this.props.history.push('sexsummary');
  }

  openDate (){
    this.refs.time.instance.show();
  }

  changeDate (event){
    this.props.DispatchChangeCurrentSexInfo(new Date(event.valueText));
  }

  render (){
    return (
      <div>
        <Header style="headerDark" middle="Masturbation" left={<LeftBack link={this.props.history.goBack} />} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <mobiscroll.Datetime
          onSet={this.changeDate}
          max={new Date()}
          ref="time"
          lang="en"
          display="bottom"
          defaultValue={new Date(this.props.currentSexInfo.date)}
          headerText={false}
        />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div onClick={this.openDate} className={`${mainStyles.bottom} ${mainStyles.dataItem}`}>
            <RightArrow label="Date" rightText={Moment(this.props.currentSexInfo.date).format('D MMMM YYYY')}/>
          </div>
          <DataBreak />
          <Switch label="Toys?" val={false}/>
          <Switch label="Porn?" val={false}/>
          <DataBreak text="ORGASM"/>
          <div className={mainStyles.slider}>
            <div className={mainStyles.dataBreak + ' ' + mainStyles.long}>
              <div>Quality</div>
            </div>
            <mobiscroll.Slider value="3" min={1} max={5} step={1} data-step-labels="[1, 2, 3, 4, 5]"/>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentSexInfo: state.currentSexInfo
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDates : bindActionCreators(dataAction.pushToDates, dispatch),
    DispatchChangeCurrentSexInfo : bindActionCreators(currentSexInfo.changeCurrentSexInfo, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
