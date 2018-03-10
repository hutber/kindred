import React from 'react';
import RequireLogin from '../shared/auth/RequireLogin';
import { NavLink } from 'react-router-dom';

//Header
import Header from '../shared/header/Header';
import HeaderRightDone from '../shared/header/RightDone';
import Menu from '../shared/menu';

//Styles
import mainStyles from '../../components/shared/main.css';
import formStyles from '../../components/shared/form/formItems.css';

//textform elements
import DataBreak from '../../components/shared/textForm/DataBreak';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header style="headerDark" middle="Settings" right={<HeaderRightDone link="/home" />} />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <NavLink to="/changepassword" className={`${formStyles.dataItem}`}>
            Change Password
          </NavLink>
          <NavLink to="/deletedata" className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            Delete Data
          </NavLink>
          <DataBreak />
          <NavLink to="/logout" className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            Logout
          </NavLink>
        </div>
        <Menu />
      </div>
    );
  }
}

export default Home;
