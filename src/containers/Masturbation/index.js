//Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'moment';
import RequireLogin from '../../components/shared/auth/RequireLogin';
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as masturbationAction from '../../actions/sexPages/masturbation/currentMasturbationAction';
import * as dataMasturbationAction from '../../actions/sexPages/masturbation/dataMasturbationAction';

//Selection Items
import Menu from '../../components/shared/menu';
import Tags from '../../components/tags';

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
import DataBreak from '../../components/shared/textForm/DataBreak';
import RightArrow from '../../components/shared/textForm/RightArrow';

class Masturbation extends React.Component {
  constructor(props) {
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

  async saveButton() {
    const options = {
      token: this.props.token,
      url: `${this.props.api.endpoint}/${this.props.api.masturbationSubmit}`,
      currentData: this.props.currentDate,
      desire: this.props.current.desire,
      body: {
        dateDate: this.props.currentDate,
        location: '',
        orgasmQuality: this.props.current.orgasmQuality,
        orgasmQuantity: this.props.current.orgasmQuantity,
        porn: this.props.current.porn,
        toys: this.props.current.toys,
        tags: JSON.stringify(this.props.tags)
      }
    };
    await this.props.saveMasturbation(options);

    this.props.pushToDates(this.props.currentDate);
    this.props.pushToMasturbation({
      data: this.props.current,
      currentDate: this.props.currentDate
    });
    this.props.history.push('sexsummary');
    this.resetMasturbation();
  }

  //Quantity
  openQuantity() {
    this.refs.orgasmQuantity.instance.show();
  }
  setQuantity(event) {
    this.setChanged();
    this.props.DispatchOrgasmQuantity(Number.parseFloat(event.valueText));
  }

  //Quality
  setQuality(event) {
    this.setChanged();
    this.props.DispatchOrgasmQuality(event);
  }

  setChanged() {
    if (!this.props.current.changed) {
      this.props.setChanged(true);
    }
  }

  openDate() {
    this.refs.time.instance.show();
  }

  changeDate(event) {
    this.setChanged();
    this.props.DispatchChangeDate(new Date(event.valueText));
  }

  resetMasturbation() {
    this.props.resetMasturbation();
  }

  render() {
    return (
      <div>
        <Header
          style="headerDark"
          middle="Masturbation"
          left={<LeftBackClear type="masturbation" history={this.props.history} />}
          right={<RightSave save={this.saveButton} />}
        />
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
            <RightArrow label="Date" rightText={Moment(this.props.currentDate).format('D MMMM YYYY')} />
          </div>
          <DataBreak />
          <Switch dataType="masturbation" type="Toys" />
          <Switch dataType="masturbation" type="Porn" />
          <DataBreak text="ORGASM" />
          <div className={formStyles.itemContainer}>
            <div className={formStyles.sliderTitle}>Quality</div>
            <mobiscroll.Slider
              value={this.props.current.orgasmQuality}
              onChange={this.setQuality}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
          <div onClick={this.openQuantity} className={`${formStyles.bottom} ${formStyles.dataItem}`} ref="masturbationTag">
            <RightArrow label="Quantity" rightText={this.props.current.orgasmQuantity} />
            <mobiscroll.Number
              onSet={this.setQuantity}
              value={this.props.current.orgasmQuantity}
              ref="orgasmQuantity"
              scale={0}
              step={1}
              min={0}
              max={99}
            />
          </div>
          <DataBreak />
          <Tags setChanged={this.setChanged} />
        </div>
        <Menu />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.auth.token,
    dates: state.dates,
    currentDate: state.dates.currentDate,
    current: state.masturbation.current,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    resetMasturbation: bindActionCreators(masturbationAction.reset, dispatch),
    pushToDates: bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeDate: bindActionCreators(datesAction.changeCurrentSexDate, dispatch),
    pushToMasturbation: bindActionCreators(dataMasturbationAction.pushToMasturbation, dispatch),
    saveMasturbation: bindActionCreators(dataMasturbationAction.saveMasturbation, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(masturbationAction.setOrgasmQuantity, dispatch),
    DispatchOrgasmQuality: bindActionCreators(masturbationAction.setOrgasmQuality, dispatch),
    setChanged: bindActionCreators(masturbationAction.setChanged, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Masturbation);
