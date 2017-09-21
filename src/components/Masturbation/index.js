//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'moment';
import RequireLogin from '../shared/auth/RequireLogin'
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as masturbationAction from '../../actions/sexPages/currentMasturbationAction';

//Selection Items
import Menu from '../shared/menu';
import Tags from '../tags';

//Header
import Header from '../shared/header/Header';
import LeftBack from '../shared/header/LeftBack';
import RightSave from '../shared/header/RightSave';

//styles
import mainStyles from '../shared/main.css';
import styles from './style.css';
import formStyles from '../shared/form/formItems.css';
import * as font from '../shared/font/fontello.css';

//textform elements
import DataBreak from '../shared/textForm/DataBreak'
import RightArrow from '../shared/textForm/RightArrow'
import Switch from '../shared/textForm/Switch'
import RightArrowWithNumberInput from '../shared/textForm/RightArrowWithNumberInput'

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

    this.state = {
      tagsSearch: ''
    };
  }

  saveButton (){
    this.props.pushToDesire(this.props.KnobWheel);
    this.props.pushToDates(this.props.KnobWheel.date);
    this.props.history.push('sexsummary');
  }

  //Quantity
  openQuantity (){
    this.refs.orgasmQuantity.instance.show();
  }
  setQuantity (event){
    this.props.DispatchOrgasmQuantity(Number.parseFloat(event.valueText));
  }

  //Quality
  setQuality (event){
    this.props.DispatchOrgasmQuality(event);
  }

  openDate (){
    this.refs.time.instance.show();
  }

  changeDate (event){
    this.props.DispatchChangeDate(new Date(event.valueText));
  }

  searchTags (event){
    this.setState({tagsSearch: event.target.value});
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
          defaultValue={new Date(this.props.sexDates.currentDate)}
          headerText={false}
        />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div onClick={this.openDate} className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            <RightArrow label="Date" rightText={Moment(this.props.sexDates.currentDate).format('D MMMM YYYY')}/>
          </div>
          <DataBreak />
          <Switch label="Toys?" val={false}/>
          <Switch label="Porn?" val={false}/>
          <DataBreak text="ORGASM"/>
          <div className={formStyles.preTitle}>
            <div className={formStyles.inLineTitle}>
              <div>Quality</div>
            </div>
            <mobiscroll.Slider
              value={this.props.masturbation.quality}
              onChange={this.setQuality}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
          <div onClick={this.openQuantity} className={`${mainStyles.bottom} ${formStyles.dataItem}`}>
            <RightArrow label="Quantity" rightText={this.props.masturbation.quantity}/>
            <mobiscroll.Number
              onSet={this.setQuantity}
              value={this.props.masturbation.quantity}
              ref="orgasmQuantity"
              scale={0}
              step={1}
              min={0}
              max={11}
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
    sexDates: state.sexDates,
    masturbation: state.currentMasturbation
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeDate : bindActionCreators(datesAction.changeCurrentSexDate, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(masturbationAction.setOrgasmQuantity, dispatch),
    DispatchOrgasmQuality: bindActionCreators(masturbationAction.setOrgasmQuality, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
