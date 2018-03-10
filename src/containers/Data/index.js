import React from 'react';

//Require Login/Logout
import RequireLogin from '../../components/shared/auth/RequireLogin';

//Header
import Header from '../../components/shared/header/Header';
import RightPlus from '../../components/shared/header/RightPlus';
import Menu from '../../components/shared/menu';

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header right={<RightPlus link="/home" />} />
        <RequireLogin />
        <Menu />
      </div>
    );
  }
}

export default Data;
