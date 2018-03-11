import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mobiscroll from '../../../components/shared/mobiscroll/mobiscroll.custom';

import * as desireCurrentAction from '../../../actions/sexPages/desire/desireCurrentAction';
import * as masturbationAction from '../../../actions/sexPages/masturbation/currentMasturbationAction';
import * as sexCurrentAction from '../../../actions/sexPages/sex/currentSexAction';

//Styles
import * as font from '../font/fontello.css';
import header from './Header.css';

class Left extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? this.props.title : null,
      text: this.props.text ? this.props.text : 'Are you sure you want to leave and lose your changes?',
      submit: this.props.submit ? this.props.submit : 'Ok',
      cancel: this.props.cancel ? this.props.cancel : 'Cancel?'
    };

    this.showPopup = this.showPopup.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  showPopup() {
    if (this.props[this.props.type].changed) {
      this.refs.widgetCenter.instance.show();
    } else {
      this.props.history.push('sextypeselection');
    }
  }

  resetData(event) {
    if (event.button === 'set' && this.props[this.props.type].changed) {
      this.props['reset' + this.props.type]();
      this.props.history.push('sextypeselection');
    }
  }

  render() {
    return (
      <div>
        <div onTouchTap={this.showPopup}>
          <i className={header.leftArrow + ' ' + font['icon-left-small']} />
        </div>
        <mobiscroll.Widget
          ref="widgetCenter"
          theme="kindred"
          lang="en"
          style={{ display: 'none' }}
          buttons={[
            {
              text: this.state.submit,
              handler: 'set'
            },
            {
              text: this.state.cancel,
              handler: 'cancel'
            }
          ]}
          display="center"
          cssClass="md-dialog-cont"
          onBeforeClose={this.resetData}
        >
          <div className="md-dialog">
            <h3>{this.state.title}</h3>
            <p>{this.state.text}</p>
          </div>
        </mobiscroll.Widget>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    masturbation: state.masturbation.current,
    desire: state.desire.current,
    sex: state.sex.current
  };
}

function matchDispatchToProps(dispatch) {
  return {
    resetmasturbation: bindActionCreators(masturbationAction.reset, dispatch),
    resetdesire: bindActionCreators(desireCurrentAction.reset, dispatch),
    resetsex: bindActionCreators(sexCurrentAction.reset, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Left);
