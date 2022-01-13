import {mount} from 'enzyme';
import React from 'react';
import {Header} from '../../components/header';
import {TouchableOpacity, Text} from 'react-native';

describe('Header', () => {
  it('should render the restart button and count text component', () => {
    const wrapper = mount(<Header count={5} resetListener={jest.fn()} />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(2);
    expect(wrapper.find(Text).at(1).children().text()).toEqual('COUNT: 5');
  });
});
