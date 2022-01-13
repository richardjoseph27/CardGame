import {mount} from 'enzyme';
import React from 'react';
import {Alert} from 'react-native';
import {Card} from '../../components/card';
import {TouchableOpacity} from 'react-native';
import {randomNumGen} from '../../utils';
import Cards from '../../components/cards/Cards';
import {Header} from '../../components/header';

jest.mock('../../utils/randomNumGen', () => ({
  randomNumGen: jest.fn().mockImplementation(() => [2, 3, 2, 3]),
}));

describe('Cards', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  jest.spyOn(Alert, 'alert');

  it('should render the card component', () => {
    const wrapper = mount(<Cards />);
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  it('should restart', () => {
    const wrapper = mount(<Cards />);
    wrapper.find(Header).at(0).find(TouchableOpacity).at(0).simulate('click');
    expect(randomNumGen).toHaveBeenCalledTimes(1);
  });

  it('should render game over alert', () => {
    const wrapper = mount(<Cards />);
    const cards = wrapper.find(Card);

    cards.at(0).simulate('click');
    cards.at(2).simulate('click');
    cards.at(1).simulate('click');
    cards.at(3).simulate('click');

    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });

  it('should render game over alert', () => {
    const wrapper = mount(<Cards />);
    const cards = wrapper.find(Card);

    cards.at(0).simulate('click');
    cards.at(0).simulate('click');

    expect(wrapper.find(Card)).toHaveLength(4);
  });
});
