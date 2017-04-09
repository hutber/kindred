/* eslint-disable object-property-newline */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'
import {expect} from 'chai';
import {shallow} from 'enzyme';

//Splash
import Splash from '../../../src/components/Splash';
import * as styles from '../../../src/components/Splash/style.css';

//logo
import Logo from '../../../src/components/shared/logo';


describe('<Splash />', () => {

  const wrapper = shallow(<Splash/>);

  it('must be defined', () => {
    expect(Splash).to.be.defined;
  });

  it('should have one logo', () => {
    expect(wrapper.find('Logo')).to.have.length(1);
  })

  it('should have className', () => {
    expect(wrapper.first().prop('className'))
      .to.contain('indexAppContent');
  })

  // })
});
