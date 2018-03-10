import React from 'react';
import { NavLink } from 'react-router-dom';

//Require Login/Logout
import RequireLogin from '../../components/shared/auth/RequireLogin';

//Header
import Header from '../../components/shared/header/Header';
import HeaderRightDone from '../../components/shared/header/RightDone';
import Menu from '../../components/shared/menu';

//Styles
import mainStyles from '../../components/shared/main.css';
import formStyles from '../../components/shared/form/formItems.css';

//textform elements
import DataBreak from '../../components/shared/textForm/DataBreak';

class More extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header style="headerDark" middle="More" right={<HeaderRightDone link="/home" />} />
        <RequireLogin />
        <div className={`${mainStyles.contentAreaBG}`}>
          <DataBreak />
          <div className={`${formStyles.dataItem}`}>
            <NavLink to="/changepassword">Change Password</NavLink>
          </div>
          <div className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            <NavLink to="/deletedata">Delete Data</NavLink>
          </div>
          <DataBreak />
          <div className={`${formStyles.bottom} ${formStyles.dataItem}`}>
            <NavLink to="/logout">Logout</NavLink>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default More;
