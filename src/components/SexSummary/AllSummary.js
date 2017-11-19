//Core
import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import RequireLogin from '../shared/auth/RequireLogin'
import * as desireAction from '../../actions/sexPages/desire/desireAction';
import * as datesAction from '../../actions/datesSexAction';
import { TrimDateReturnTodaysDate } from '../../functions/dates';

//Selection Items
import Moment from 'moment';
import Menu from '../shared/menu';

//Sex Summary
import DesireSummary from './DesireSummary'
import MasturbationSummary from './MasturbationSummary'
import SexSummary from './SexSummary'

//Header
import Header from '../shared/header/Header';
import HeaderLeft from '../shared/header/LeftBack';
import RightPlus from '../shared/header/RightPlus';

import mainStyles from '../shared/main.css';
import styles from './style.css';

class SexOverviewSummary extends React.Component {
  constructor (props){
    super(props);

    this.goHome = this.goHome.bind(this);
	  this.displayCurrentDesires = this.displayCurrentDesires.call(this);
  }

  goHome (){
    this.props.history.push('home');
  }

	displayCurrentDesires (){
		const todaysData = TrimDateReturnTodaysDate(this.props.dates, this.props.currentDate);
		if(todaysData.length > 0) {
			return todaysData.map(dates => <DesireSummary key={dates} knob={this.props.desire.data[dates].desire}/>);
		}else{
			return <div>
				<NavLink to="desire">
					Click here to add Desire data for this date
				</NavLink>
			</div>;
		}
	}

  render (){
    return (
      <div>
        <Header left={<HeaderLeft link={this.goHome}/>} right={<RightPlus link="sextypeselection"/>}/>
        <RequireLogin />
        <div className={`${mainStyles.contentAreaFullWidth} ${styles.itemContainers}`}>
          <div className={`${styles.dateArea}`}>
            <div>
              <h2>{Moment(this.props.currentDate).format('Do MMMM')}</h2>
              <p>Swipe right to delete an entry</p>
            </div>
          </div>
	        {this.displayCurrentDesires}
          <MasturbationSummary />
          <SexSummary />
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    dates: state.dates.dates,
	  currentDate: state.dates.currentDate,
    desire: state.desire
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(desireAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SexOverviewSummary);
