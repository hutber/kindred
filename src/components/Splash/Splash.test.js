import React from 'react';
import Splash from './Splash';
import ShallowRenderer from 'react-test-renderer/shallow'

describe('</Splash>', () => {
	it('We see the Splash Page with logo', () => {
		const renderer = new ShallowRenderer();
		const result = renderer.render(<Splash />);
		expect(result).toMatchSnapshot();
	});
});
