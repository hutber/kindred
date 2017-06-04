import React from 'react';
import { bindActionCreators } from 'redux'
import { RequireLogin } from '../shared/auth/userRedirects'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';
import * as currentSexInfo from '../../actions/currentSexInfo'
import {connect} from 'react-redux';

//Header
import Header from '../shared/header/Header';
import RightPlus from '../shared/header/RightPlus';
import Menu from '../shared/menu';

//Styles
import HomeStyle from './home.css';

class Home extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      settings : {
        display: 'inline',
        yearChange: false,
        marked: [
          new Date(2012,5,4),
          new Date(2012,5,13),
          'w0',
          '5/1',
          '08/24',
          '12/25'
        ]
        , max: new Date()
        // , showOuterDays: false
      }
    };
    this.selectData = this.selectData.bind(this);
  }

  selectData = (event, inst) => {
    if(event.control) {
      this.props.DispatchChangeCurrentSexInfo(event.date);
      window.location.hash = 'sextypeselection';
    }
  };

  onPosition = (ev) => {
    let $ = mobiscroll.$,
      monthCont = $('.mbsc-cal-anim-c', ev.target),
      calHeight = document.body.offsetHeight - 375;
    monthCont.height('');
    monthCont.height(calHeight);
  };

  render(){
    var now = new Date(),
      max = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());
    return (
      <div>
        <RequireLogin />
        <Header right={<RightPlus link="sextypeselection" />} />
        <div className={HomeStyle.home}>
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

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexInfo : bindActionCreators(currentSexInfo.changeCurrentSexInfo, dispatch)}
}

export default connect(null,matchDispatchToProps)(Home);
