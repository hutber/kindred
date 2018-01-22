import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Splash from './Splash';

it('Splash page is rendered', () => {
	const result = shallow(
		<Splash />,
	);

	expect(shallowToJson(result)).toMatchSnapshot();
});
