//Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RequireLogin from '../../components/shared/auth/RequireLogin';

//Actions
import * as desireCurrentAction from '../../actions/sexPages/desire/desireCurrentAction';
import * as desireAction from '../../actions/sexPages/desire/desireAction';
import * as datesAction from '../../actions/datesSexAction';

//Selection Items
import Moment from 'moment';
import Menu from '../../components/shared/menu/index';
import Knob from '../../components/shared/Knob/index';

//Header
import Header from '../../components/shared/header/Header';
import LeftBackClear from '../../components/shared/header/LeftBackClear';
import RightSave from '../../components/shared/header/RightSave';

import mainStyles from '../../components/shared/main.css';
import styles from './style.css';

class Desire extends React.Component {
  constructor(props) {
    super(props);
    this.saveButton = this.saveButton.bind(this);
  }

  async saveButton() {
    const options = {
      token: this.props.token,
      url: `${this.props.api.endpoint}/${this.props.api.desireSubmit}`,
      currentDate: this.props.currentDate,
      desire: this.props.current.desire,
      body: {
        dateDate: this.props.currentDate,
        location: '',
        value: this.props.current.desire
      }
    };
    await this.props.saveDesire(options);
    this.props.pushToDesire({
      desire: options.desire,
      currentDate: options.currentDate
    });
    this.props.pushToDates(this.props.currentDate);
    this.props.resetdesire();
    this.props.history.push('sexsummary');
  }

  render() {
    let config = {
      min: 0,
      max: 10,
      thickness: 0.25,
      width: '90%',
      height: '250',
      text: 'jamie',
      stopper: false,
      inline: false,
      lineCap: 'round',
      bgColor: '#2253EB',
      fgColor: '#06FFF0',
      displayInput: true,
      fontWeight: 'bold',
      displayPrevious: true
    };
    return (
      <div>
        <Header left={<LeftBackClear type="desire" history={this.props.history} />} right={<RightSave save={this.saveButton} />} />
        <RequireLogin />
        <div className={`${mainStyles.verticalAlignParent} ${styles.vertAlign}`}>
          <div className={styles.content + ' ' + mainStyles.verticalAlign}>
            <h1>Desire</h1>
            <p>{Moment(this.props.currentDate).format('MMMM Do YYYY')}</p>
            <p>
              Drag the green bar around the <br /> wheel to set your desire rating
            </p>
            <Knob config={config} />
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.auth.token,
    current: state.desire.current,
    currentDate: state.dates.currentDate,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    pushToDates: bindActionCreators(datesAction.pushToDates, dispatch),
    pushToDesire: bindActionCreators(desireAction.pushToDesire, dispatch),
    saveDesire: bindActionCreators(desireAction.saveDesire, dispatch),
    resetdesire: bindActionCreators(desireCurrentAction.reset, dispatch),
    setChanged: bindActionCreators(desireCurrentAction.setChanged, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Desire);
