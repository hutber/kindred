/* eslint-disable object-property-newline */
import ReactTestUtils from 'react-dom/test-utils' // ES6
import {expect} from 'chai';
import Splash from '../../../src/components/Splash';

//Logo Details
import Logo from '../../../src/components/shared/logo'
import logo from '../../../src/components/shared/logo/_Logo.css';
import * as font from '../../../src/components/shared/font/fontello.css';

describe('Splash', () => {
  it('must be defined', () => {
    expect(Splash).to.be.defined;
  })

  it('should have kindred logo', () => {
    const SplashRendered = ReactTestUtils.renderIntoDocument(<Splash/>);
    const RenderedLogo = ReactTestUtils.findRenderedDOMComponentWithClass(SplashRendered, '.logo')
    expect(RenderedLogo.className).to.equal(logo.logo +' '+font['icon-logo']);
  })
});
