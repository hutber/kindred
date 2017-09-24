//Core
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Moment from 'moment';
import RequireLogin from '../../components/shared/auth/RequireLogin'
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as masturbationAction from '../../actions/sexPages/currentMasturbationAction';

//Selection Items
import Menu from '../../components/shared/menu/index';
import Tags from '../../components/tags/index';

//Header
import Header from '../../components/shared/header/Header';
import LeftBack from '../../components/shared/header/LeftBack';
import RightSave from '../../components/shared/header/RightSave';

//styles
import mainStyles from '../../components/shared/main.css';
import styles from './style.css';
import formStyles from '../../components/shared/form/formItems.css';
import * as font from '../../components/shared/font/fontello.css';

//textform elements
import DataBreak from '../../components/shared/textForm/DataBreak'
import RightArrow from '../../components/shared/textForm/RightArrow'
import Switch from '../../components/shared/textForm/Switch'
import RightArrowWithNumberInput from '../../components/shared/textForm/RightArrowWithNumberInput'

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
  }

  componentWillMount(){
    console.info(this.refs.masturbationTag);
  }

  componentDidMount(){
    console.info(this.refs.masturbationTag);
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
          <div className={formStyles.itemContainer}>
            <div className={formStyles.sliderTitle}>Quality</div>
            <mobiscroll.Slider
              value={this.props.masturbation.quality}
              onChange={this.setQuality}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
          <div onClick={this.openQuantity} className={`${mainStyles.bottom} ${formStyles.dataItem}`}  ref="masturbationTag">
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
          <Tags>
            <h1>Hutber</h1>
          </Tags>
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
