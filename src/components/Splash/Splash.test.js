/* eslint-disable object-property-newline */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Splash from './Splash';

describe('Splash Page', function() {
	it('should render without throwing an error', function() {
		expect(shallow(<Splash />).contains(<div className="foo">Bar</div>)).toBe(true);
	});
});
