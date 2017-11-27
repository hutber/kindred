import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';
import { SexDateOnly, TrimDateThenSexDateOnly, TrimDateReturnTodaysDate } from '../../functions/dates';
import * as datesSexAction from '../../actions/datesSexAction'

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
    this.state = {
      settings : {
        display: 'inline'
        , controls: ['calendar', 'time']
        , yearChange: false
        , marked: Object.keys(this.props.dates).map((date) => {
          const newDate = date.split('_');
          newDate[1] = newDate[1].split('-').join(':');
          return new Date(newDate.join(' '));
        })
        , max: new Date()
      }
    };
    this.selectData = this.selectData.bind(this);
  }

  selectData (event, inst) {
    const selectedDate = TrimDateReturnTodaysDate(this.props.dates, event.date);
    if(event.control) {
      this.props.DispatchChangeCurrentSexInfo(event.date);
      if(selectedDate === null){
          this.props.history.push('sextypeselection');
      }else{
          this.props.history.push('sexsummary');
      }

    }
  };

  onPosition (ev) {
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
    dates: state.dates.dates
  }
}

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexInfo : bindActionCreators(datesSexAction.changeCurrentSexDate, dispatch)}
}

export default connect(matchStateToProps,matchDispatchToProps)(Home);
