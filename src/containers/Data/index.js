import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Require Login/Logout
import RequireLogin from '../../components/shared/auth/RequireLogin';

//Header
import Header from '../../components/shared/header/Header';
import RightPlus from '../../components/shared/header/RightPlus';
import Menu from '../../components/shared/menu';

//Styles
import mainStyles from '../../components/shared/main.css';
import formStyles from '../../components/shared/form/formItems.css';

//textform elements
import DataBreak from '../../components/shared/textForm/DataBreak';
import RightArrow from '../../components/shared/textForm/RightArrow';

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header right={<RightPlus link="/home" />} />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div className={formStyles.dataItem}>
            <label>Total Desires</label>
            <div className={formStyles.info}>{Object.keys(this.props.desire.data).length}</div>
          </div>
          <DataBreak />
          <div className={formStyles.dataItem}>
            <label>Total Masturbations</label>
            <div className={formStyles.info}>{Object.keys(this.props.masturbation.data).length}</div>
          </div>
          <DataBreak />
          <div className={formStyles.dataItem}>
            <label>Total Sex</label>
            <div className={formStyles.info}>{Object.keys(this.props.sex.data).length}</div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dates: state.dates,
    desire: state.desire,
    masturbation: state.masturbation,
    sex: state.sex
  };
}

function matchDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, matchDispatchToProps)(Data);
