import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';
import * as currentSexInfo from '../../actions/currentSexInfo'
import * as sexData from  '../../reducers/sexDataReducer'

//Header
import Header from '../shared/header/Header';
import RightPlus from '../shared/header/RightPlus';
import Menu from '../shared/menu';

//Styles
import HomeStyle from './home.css';
import mainStyles from '../shared/main.css';

class Home extends React.Component {
  constructor (props){
    super(props);
    const now = new Date();
    this.state = {
      settings : {
        display: 'inline'
        , controls: ['calendar', 'time']
        // , yearChange: false
        , marked: Object.keys(this.props.dates).map((date) => {
          return new Date(date);
        })
        , max: new Date()
        // , showOuterDays: false
      }
    };
    this.selectData = this.selectData.bind(this);
  }

  selectData = (event, inst) => {
    if(event.control) {
      this.props.DispatchChangeCurrentSexInfo(event.date);
      this.props.history.push('sextypeselection');
    }
  };

  onPosition = (ev) => {
    let $ = mobiscroll.$,
      monthCont = $('.mbsc-cal-anim-c', ev.target),
      calCont = $('.mbsc-fr-c', ev.target),
      calHeight = document.body.offsetHeight - 405,
      calAllHeight = document.body.offsetHeight - 325;
    calCont.height('');
    calCont.height(calAllHeight);
    monthCont.height('');
    monthCont.height(calHeight);
  };

  render(){
    return (
      <div>
        <RequireLogin />
        <Header right={<RightPlus link="sextypeselection" />} />
        <div className={`${HomeStyle.home} ${mainStyles.contentArea}`}>
          <div className="pageInfo">
            <h1>My calender</h1>
            <p>Select a date to view <br/> input your information</p>
          </div>
          <div className={"cal " + HomeStyle.calenderContainer}>
            <mobiscroll.Calendar onPosition={this.onPosition} onSetDate={this.selectData} options={this.state.settings} {...this.props} />
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

function matchStateToProps(state){
  return {
    dates: state.sexData.dates
  }
}

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexInfo : bindActionCreators(currentSexInfo.changeCurrentSexInfo, dispatch)}
}

export default connect(matchStateToProps,matchDispatchToProps)(Home);
