//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'moment';
import RequireLogin from '../../components/shared/auth/RequireLogin'
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as masturbationAction from '../../actions/sexPages/masturbation/currentMasturbationAction';
import * as dataMasturbationAction from '../../actions/sexPages/masturbation/dataMasturbationAction';

//Selection Items
import Menu from '../../components/shared/menu/index';
import Tags from '../../components/tags/index';

//Header
import Header from '../../components/shared/header/Header';
import LeftBackClear from '../../components/shared/header/LeftBackClear';
import RightSave from '../../components/shared/header/RightSave';

//styles
import mainStyles from '../../components/shared/main.css';
import formStyles from '../../components/shared/form/formItems.css';

//Switch Elements
import Switch from './Switch';

//textform elements
import DataBreak from '../../components/shared/textForm/DataBreak'
import RightArrow from '../../components/shared/textForm/RightArrow'

class Masturbation extends React.Component {
  constructor (props){
    super(props);
    this.saveButton = this.saveButton.bind(this);

    //Quantity
    this.openQuantity = this.openQuantity.bind(this);
    this.setQuantity = this.setQuantity.bind(this);

    //Quality
    this.setQuality = this.setQuality.bind(this);

    //Dates
    this.changeDate = this.changeDate.bind(this);
    this.openDate = this.openDate.bind(this);

    //Changed
    this.setChanged = this.setChanged.bind(this);

    this.resetMasturbation = this.resetMasturbation.bind(this);
  }

  saveButton (){
    this.props.pushToMasturbation({
	    data: this.props.masturbation,
	    currentDate: this.props.currentDate
    });
    this.props.pushToDates(this.props.currentDate);
    this.resetMasturbation();
    this.props.history.push('sexsummary');
  }


  //Quantity
  openQuantity (){
    this.refs.orgasmQuantity.instance.show();
  }
  setQuantity (event){
    this.setChanged();
    this.props.DispatchOrgasmQuantity(Number.parseFloat(event.valueText));
  }

  //Quality
  setQuality (event){
    this.setChanged();
    this.props.DispatchOrgasmQuality(event);
  }

  setChanged (){
    if(!this.props.masturbation.changed){
      this.props.setChanged(true);
    }
  }

  openDate (){
    this.refs.time.instance.show();
  }

  changeDate (event){
    this.setChanged();
    this.props.DispatchChangeDate(new Date(event.valueText));
  }

  resetMasturbation (){
    this.props.resetMasturbation();
  }

  render (){
  	console.info(this.props.sex);
    return (
      <div>
        <Header style="headerDark" middle="Sex" left={<LeftBackClear type="masturbation" history={this.props.history}/>} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <mobiscroll.Datetime
          onSet={this.changeDate}
          max={new Date()}
          ref="time"
          lang="en"
          display="bottom"
          defaultValue={new Date(this.props.currentDate)}
          headerText={false}
        />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div onClick={this.openDate} className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            <RightArrow label="Total Participants" rightText={this.props.sex.participants}/>
          </div>
          <DataBreak />
	        <div onClick={this.openQuantity} className={`${formStyles.dataItem}`}  ref="Occurances">
		        <RightArrow label="Occurrences on this date" rightText={this.props.sex.occurrences}/>
		        <mobiscroll.Number
			        onSet={this.setQuantity}
			        value={this.props.sex.occurrences}
			        ref="occurrencesOrasm"
			        scale={0}
			        step={1}
			        min={0}
			        max={99}
		        />
	        </div>
          <Switch type="Protection" bottom="true" />
          <div className={formStyles.itemContainer}>
            <div className={formStyles.sliderTitle}>Enjoyment (overall)</div>
            <mobiscroll.Slider
              value={this.props.sex.enjoyment}
              onChange={this.setQuality}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
          <DataBreak />
          <Tags />
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    dates: state.dates,
	  currentDate: state.dates.currentDate,
    sex: state.sex.current
  };
}

function matchDispatchToProps(dispatch){
  return {
    resetMasturbation: bindActionCreators(masturbationAction.reset, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeDate : bindActionCreators(datesAction.changeCurrentSexDate, dispatch),
    pushToMasturbation : bindActionCreators(dataMasturbationAction.pushToMasturbation, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(masturbationAction.setOrgasmQuantity, dispatch),
    DispatchOrgasmQuality: bindActionCreators(masturbationAction.setOrgasmQuality, dispatch),
    setChanged: bindActionCreators(masturbationAction.setChanged, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
