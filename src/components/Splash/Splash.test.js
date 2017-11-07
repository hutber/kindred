import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Splash from './Splash';

it('Splash page is rendered', () => {
	const result = shallow(
		<Splash />,
	);

	expect(toJson(result)).toMatchSnapshot();
});
