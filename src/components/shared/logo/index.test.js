import React from 'react';
import Logo from './index';
import ShallowRenderer from 'react-test-renderer/shallow'

describe('</Splash>', () => {
	it('Render the logo', () => {
		const renderer = new ShallowRenderer();
		const result = renderer.render(<Logo />);
		expect(result).toMatchSnapshot();
	});
});
