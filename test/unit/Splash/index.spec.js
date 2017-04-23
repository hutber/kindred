/* eslint-disable object-property-newline */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'
import { expect } from 'chai';
import { NavLink } from 'react-router-dom'
import { shallow } from 'enzyme';

//Splash
import Splash from '../../../src/components/Splash';
import * as styles from '../../../src/components/Splash/style.css';

//logo
import Logo from '../../../src/components/shared/logo';


describe('<Splash />', () => {

  const wrapperSplash = shallow(<Splash/>);
  const wrapperNavLink = shallow(<NavLink />);
  const wrapperLogo = shallow(<Logo />);

  it('must be defined', () => {
    expect(wrapperSplash).to.be.defined;
  });

  it('should have one logo', () => {
    expect(wrapperSplash.find(Logo)).to.have.length(1);
  })

  it('should have className', () => {
    expect(wrapperSplash.first().prop('className'))
      .to.contain('indexAppContent');
  })

  it('Logo links to Home', () => {
    expect(wrapperSplash.find(NavLink).first().props().to)
      .equals('/Home');
  })

});
