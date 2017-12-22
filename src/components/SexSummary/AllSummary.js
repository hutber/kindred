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

    this.state = {
    	totalEntries: 0
    }
	  this.goHome = this.goHome.bind(this);
	  this.displayCurrentDesires = this.displayCurrentDesires.call(this);
	  this.displayCurrentMasturbation = this.displayCurrentMasturbation.call(this);
	  this.displayCurrentSex = this.displayCurrentSex.call(this);
  }

  goHome (){
    this.props.history.push('home');
  }

	displayCurrentDesires (){
		const todaysData = TrimDateReturnTodaysDate(this.props.desire.data, this.props.currentDate);
		if(todaysData) {
			this.state.totalEntries = this.state.totalEntries + 1;
			return todaysData.map(dates => <DesireSummary key={dates} knob={this.props.desire.data[dates].desire}/>);
		}else{
			return <DesireSureallmmary knob={null}/>;
		}
	}

	displayCurrentMasturbation (){
		const todaysData = TrimDateReturnTodaysDate(this.props.masturbation.data, this.props.currentDate);
		console.info(todaysData);
		if(todaysData) {
			this.state.totalEntries = this.state.totalEntries + 1;
			return todaysData.map(dates => <MasturbationSummary key={dates} data={this.props.masturbation.data[dates]}/>);
		}else{
			return <MasturbationSummary />;
		}
	}

	displayCurrentSex (){
		// const todaysData = TrimDateReturnTodaysDate(this.props.sex.data, this.props.currentDate);
		// if(todaysData.length > 0) {
		// 	this.state.totalEntries = this.state.totalEntries + 1;
		// 	return '';
		// }else{
			return <div>
				<NavLink to="desire">
					Click here to add Desire data for this date
				</NavLink>
			</div>;
		// }
	}

  render (){
		const summaryStyles = this.state.totalEntries >= 2 ? '' : mainStyles.flexWithChildren;
    return (
      <div>
        <Header left={<HeaderLeft link={this.goHome}/>} right={<RightPlus link="sextypeselection"/>}/>
        <RequireLogin />
        <div className={`${mainStyles.contentAreaFullWidth} ${summaryStyles} ${styles.itemContainers}`}>
          <div className={`${styles.dateArea}`}>
            <div>
              <h2>{Moment(this.props.currentDate).format('Do MMMM')}</h2>
              <p>Swipe right to delete an entry</p>
            </div>
          </div>
	        {this.displayCurrentDesires}
	        {this.displayCurrentMasturbation}
	        {this.displayCurrentSex}
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
    desire: state.desire,
	  masturbation: state.masturbation,
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDesire : bindActionCreators(desireAction.pushToDesire, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SexOverviewSummary);
