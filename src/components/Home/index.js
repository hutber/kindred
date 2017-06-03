import React from 'react';
import {Redirect} from 'react-router'
import Logo from '../shared/logo/index';
import {RequireLogin} from '../shared/auth/userRedirects'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';
import store from '../../configureStore';

//Header
import Header from '../shared/header/Header';
import HeaderRight from './right';
import Menu from '../shared/menu';

//Styles
import HomeStyle from './home.css';

class Home extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      settings : {
        display: 'inline',
        // layout: 'liquid',
        // weekDays: 'min',
        yearChange: false,
        marked: [
          new Date(2012,5,4),
          new Date(2012,5,13),
          'w0',
          '5/1',
          '08/24',
          '12/25'
        ],
        // height: 35,
        max: new Date(),
        showOuterDays: false
      }
    };
    this.selectData = this.selectData.bind(this);
  }

  selectData = (event, inst) => {
    if(event.control) {
      // store.dispatch (currentSex.changeCurrentSexDate (event.date));
      // this.props.router.push('/selection');
    }
  };

  onPosition = (ev) => {
    // const pageInfo = document.querySelector('.pageInfo');
    // const pageInfoHeight = pageInfo.offsetHeight;
    // const contentHeight = pageInfo.parentElement.offsetHeight;

    let $ = mobiscroll.$,
      monthCont = $('.mbsc-cal-anim-c', ev.target),
      calHeight = document.body.offsetHeight - 350;
    monthCont.height('');
    monthCont.height(calHeight);
  };

  render(){
    var now = new Date(),
      max = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());
    return (
      <div>
        <RequireLogin />
        <Header right={<HeaderRight />} />
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

export default Home;
