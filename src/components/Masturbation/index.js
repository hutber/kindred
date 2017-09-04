//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'moment';
import RequireLogin from '../shared/auth/RequireLogin'
import * as datesAction from '../../actions/datesSexAction';
import mobiscroll from '../shared/mobiscroll/mobiscroll.custom';

//Selection Items
import Menu from '../shared/menu';

//Header
import Header from '../shared/header/Header';
import LeftBack from '../shared/header/LeftBack';
import RightSave from '../shared/header/RightSave';

//styles
import mainStyles from '../shared/main.css';
import form from '../shared/form/formItems.css';
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
    this.props.DispatchChangeDate(new Date(event.valueText));
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
          <div onClick={this.openDate} className={`${form.bottom} ${form.dataItem}`}>
            <RightArrow label="Date" rightText={Moment(this.props.sexDates.currentDate).format('D MMMM YYYY')}/>
          </div>
          <DataBreak />
          <Switch label="Toys?" val={false}/>
          <Switch label="Porn?" val={false}/>
          <DataBreak text="ORGASM"/>
          <div className={form.slider}>
            <div className={form.inLineTitle}>
              <div>Quality</div>
            </div>
            <mobiscroll.Slider value="3" min={1} max={5} step={1} data-step-labels="[1, 2, 3, 4, 5]"/>
          </div>
          <div onClick={this.openQuantity} className={`${mainStyles.bottom} ${form.dataItem}`}>
            <RightArrowWithNumberInput label="Quantity" rightText={Moment(this.props.sexDates.currentDate).format('D MMMM YYYY')}/>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sexDates: state.sexDates
  };
}

function matchDispatchToProps(dispatch){
  return {
    pushToDates : bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeDate : bindActionCreators(datesAction.changeCurrentSexDate, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
