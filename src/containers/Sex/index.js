//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'moment';
import RequireLogin from '../../components/shared/auth/RequireLogin'
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as currentSexAction from '../../actions/sexPages/sex/currentSexAction';
import * as dataMasturbationAction from '../../actions/sexPages/masturbation/dataMasturbationAction';

//Selection Items
import Menu from '../../components/shared/menu/index';
import Positions from '../../components/positions/index';

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

    //Occurrences
    this.openOccurrences = this.openOccurrences.bind(this);
    this.setOccurrences = this.setOccurrences.bind(this);

    //Quantity
    this.openQuantity = this.openQuantity.bind(this);
    this.setQuantity = this.setQuantity.bind(this);

    //Quality
    this.setQuality = this.setQuality.bind(this);

    //Enjoyment
    this.setEnjoyment = this.setEnjoyment.bind(this);

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
    this.refs.sexOrgasmQuantity.instance.show();
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

	//Enjoyment
	setEnjoyment (event){
    this.setChanged();
    this.props.DispatchSetEnjoyment(event);
  }

  setChanged (){
    if(!this.props.sex.changed){
      this.props.setChanged(true);
    }
  }

  openDate (){
    this.refs.time.instance.show();
  }

  changeDate (event){
    this.setChanged();
    this.props.DispatchChangeDate(event);
  }

	openOccurrences (event){
		this.refs.occurrencesSex.instance.show();
  }

	setOccurrences (event){
    this.setChanged();
    this.props.DispatchChangeOccurrences(event.valueText);
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
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            <RightArrow label="Total Participants" rightText={this.props.sex.participants}/>
          </div>
          <DataBreak />
	        <div onClick={this.openOccurrences} className={`${formStyles.dataItem}`}  ref="Occurrences">
		        <RightArrow label="Occurrences on this date" rightText={this.props.sex.occurrences}/>
		        <mobiscroll.Number
			        onSet={this.setOccurrences}
			        value={this.props.sex.occurrences}
			        ref="occurrencesSex"
			        scale={0}
			        step={1}
			        min={0}
			        max={99}
		        />
	        </div>
          <Switch type="Protection" dataType="sex" bottom="true" />
          <div className={formStyles.itemContainer}>
            <div className={formStyles.sliderTitle}>Enjoyment (overall)</div>
            <mobiscroll.Slider
              value={this.props.sex.enjoyment}
              onChange={this.setEnjoyment}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
          <DataBreak text="ORGASM"/>
	        <div className={formStyles.itemContainer}>
		        <div className={formStyles.sliderTitle}>Quality</div>
		        <mobiscroll.Slider
			        value={this.props.sex.quality}
			        onChange={this.setQuality}
			        min={1}
			        max={5}
			        step={1}
			        data-step-labels="[1, 2, 3, 4, 5]"
		        />
	        </div>
	        <div onClick={this.openQuantity} className={`${formStyles.bottom} ${formStyles.dataItem}`}  ref="sexQuantity">
		        <RightArrow label="Quantity" rightText={this.props.sex.quantity}/>
		        <mobiscroll.Number
			        onSet={this.setQuantity}
			        value={this.props.sex.quantity}
			        ref="sexOrgasmQuantity"
			        scale={0}
			        step={1}
			        min={0}
			        max={99}
		        />
	        </div>
	        <DataBreak />
          <Positions />
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
    resetMasturbation: bindActionCreators(currentSexAction.reset, dispatch),
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch),
	  DispatchChangeOccurrences : bindActionCreators(currentSexAction.DispatchChangeOccurrences, dispatch),
    pushToMasturbation : bindActionCreators(dataMasturbationAction.pushToMasturbation, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(currentSexAction.setOrgasmQuantity, dispatch),
	  DispatchOrgasmQuality: bindActionCreators(currentSexAction.setOrgasmQuality, dispatch),
    DispatchSetEnjoyment: bindActionCreators(currentSexAction.setEnjoyment, dispatch),
    setChanged: bindActionCreators(currentSexAction.setChanged, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
