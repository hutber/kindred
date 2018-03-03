//Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RequireLogin from '../../components/shared/auth/RequireLogin';
import mobiscroll from '../../components/shared/mobiscroll/mobiscroll.custom';

//Actions
import * as datesAction from '../../actions/datesSexAction';
import * as currentSexAction from '../../actions/sexPages/sex/currentSexAction';
import { pushToSex, saveSex } from '../../actions/sexPages/sex/dataSexAction';

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
import DataBreak from '../../components/shared/textForm/DataBreak';
import RightArrow from '../../components/shared/textForm/RightArrow';

class Sex extends React.Component {
  constructor(props) {
    super(props);
    this.saveButton = this.saveButton.bind(this);

    //Participants
    this.openParticipants = this.openParticipants.bind(this);
    this.setParticipants = this.setParticipants.bind(this);
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

    this.resetSex = this.resetSex.bind(this);
  }

  async saveButton() {
    const options = {
      token: this.props.token,
      url: `${this.props.api.endpoint}/${this.props.api.sexSubmit}`,
      currentDate: this.props.currentDate,
      body: {
        dateDate: this.props.currentDate,
        location: '',
        orgasmQuality: this.props.current.orgasmQuality,
        orgasmQuantity: this.props.current.orgasmQuantity,
        enjoyment: this.props.current.enjoyment,
        occurrences: this.props.current.occurrences,
        protection: this.props.current.protection,
        partners: '',
        positions: JSON.stringify(this.props.current.positions)
      }
    };
    await this.props.saveSex(options);

    this.props.pushToDates(this.props.currentDate);
    this.props.pushToSex({
      data: this.props.current,
      currentDate: this.props.currentDate
    });
    this.resetSex();
    this.props.history.push('sexsummary');
  }

  //Quantity
  openQuantity() {
    this.refs.sexOrgasmQuantity.instance.show();
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

  //Enjoyment
  setEnjoyment(event) {
    this.setChanged();
    this.props.DispatchSetEnjoyment(event);
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
    this.props.DispatchChangeDate(event);
  }

  openParticipants() {
    this.refs.participantsSex.instance.show();
  }

  setParticipants(event) {
    this.setChanged();
    this.props.setParticipants(event.valueText);
  }

  openOccurrences() {
    this.refs.occurrencesSex.instance.show();
  }

  setOccurrences(event) {
    this.setChanged();
    this.props.DispatchChangeOccurrences(event.valueText);
  }

  resetSex() {
    this.props.resetSex();
  }

  render() {
    return (
      <div>
        <Header
          style="headerDark"
          middle="Sex"
          left={<LeftBackClear type="sex" history={this.props.history} />}
          right={<RightSave save={this.saveButton} />}
        />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div onClick={this.openParticipants} className={`${formStyles.bottom} ${formStyles.dataItem}`} ref="Participants">
            <RightArrow label="Total Participants" rightText={this.props.current.participants} />
            <mobiscroll.Number
              onSet={this.setParticipants}
              value={this.props.current.participants}
              ref="participantsSex"
              scale={0}
              step={1}
              min={0}
              max={99}
            />
          </div>
          <DataBreak />
          <div onClick={this.openOccurrences} className={`${formStyles.dataItem}`} ref="Occurrences">
            <RightArrow label="Occurrences on this date" rightText={this.props.current.occurrences} />
            <mobiscroll.Number
              onSet={this.setOccurrences}
              value={this.props.current.occurrences}
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
              value={this.props.current.enjoyment}
              onChange={this.setEnjoyment}
              min={1}
              max={5}
              step={1}
              data-step-labels="[1, 2, 3, 4, 5]"
            />
          </div>
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
          <div onClick={this.openQuantity} className={`${formStyles.bottom} ${formStyles.dataItem}`} ref="sexQuantity">
            <RightArrow label="Quantity" rightText={this.props.current.orgasmQuantity} />
            <mobiscroll.Number
              onSet={this.setQuantity}
              value={this.props.current.orgasmQuantity}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.auth.token,
    dates: state.dates,
    currentDate: state.dates.currentDate,
    current: state.sex.current,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    resetSex: bindActionCreators(currentSexAction.reset, dispatch),
    pushToDates: bindActionCreators(datesAction.pushToDates, dispatch),
    DispatchChangeOccurrences: bindActionCreators(currentSexAction.DispatchChangeOccurrences, dispatch),
    pushToSex: bindActionCreators(pushToSex, dispatch),
    saveSex: bindActionCreators(saveSex, dispatch),
    setParticipants: bindActionCreators(currentSexAction.setParticipants, dispatch),
    DispatchOrgasmQuantity: bindActionCreators(currentSexAction.setOrgasmQuantity, dispatch),
    DispatchOrgasmQuality: bindActionCreators(currentSexAction.setOrgasmQuality, dispatch),
    DispatchSetEnjoyment: bindActionCreators(currentSexAction.setEnjoyment, dispatch),
    setChanged: bindActionCreators(currentSexAction.setChanged, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Sex);
