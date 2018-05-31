//- Created by hutber on 22/04/16.  */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mobiscroll from '../../shared/mobiscroll/mobiscroll.custom';

import * as notificationActions from '../../../actions/notificationActions';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
    this.removeNotification = this.removeNotification.bind(this);
  }

  showNotification() {
    this.refs.notification.instance.show();
  }

  removeNotification() {
    this.refs.notification.instance.hide();
  }

  render() {
    if (this.refs.notification && this.props.notification && this.props.notification.message !== '') {
      this.showNotification();
    } else if (this.refs.notification && this.refs.notification && this.props.notification.message === '') {
      this.removeNotification();
    }

    if (this.props.notification.style !== '') {
      return (
        <div>
          <mobiscroll.Widget
            ref="notification"
            theme="kindred"
            lang="en-UK"
            display="bottom"
            cssClass={`md-dialog-cont kindred-dialog ${this.props.notification.style}`}
          >
            <div className="md-dialog mbsc-align-center">
              <p>{this.props.notification.message}</p>
            </div>
          </mobiscroll.Widget>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notificationAction: bindActionCreators(notificationActions.showNotification, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

//<div className={`${styles.loading} ${!this.props.displayError ? styles.hideLoading : ''}`}>
