import {mount} from 'enzyme';
import React from 'react';
import {Card} from '../../components/card';
import {TouchableOpacity} from 'react-native';
import {flipToBack} from '../../components/card/animate';

const mockedFlipCard = jest.fn();

jest.useFakeTimers();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(() => ({
    current: {
      addListener: () => {},
      interpolate: () => {},
    },
  })),
}));

jest.mock('../../components/card/animate/flipToBack', () => ({
  flipToBack: jest.fn(),
}));

jest.mock('../../components/card/animate/flipToFront', () => ({
  flipToFront: jest.fn(),
}));

const spyUseEffect = jest.spyOn(React, 'useEffect');

const props = {
  id: 'test',
  item: 11,
  flipCard: mockedFlipCard,
  reset: 0,
  isFrozen: false,
  lastCard: {value: null, ref: null},
};

describe('Card', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the card component', () => {
    const wrapper = mount(<Card {...props} />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('should call flipCard with the desired attributes', () => {
    const wrapper = mount(<Card {...props} />);
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    expect(mockedFlipCard).toHaveBeenCalledWith({
      num: 11,
      ref: {
        addListener: expect.any(Function),
        interpolate: expect.any(Function),
      },
      matched: true,
    });
  });

  it('should not render Card component when isFrozen is true', () => {
    const wrapper = mount(<Card {...props} isFrozen />);
    wrapper.setProps({isFrozen: true});

    expect(spyUseEffect).toHaveBeenCalledTimes(0);
  });

  it('should not invoke flipCard when isFrozen is true', () => {
    const wrapper = mount(<Card {...props} isFrozen />);
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    expect(mockedFlipCard).toHaveBeenCalledTimes(0);
  });

  it('should flip current and previous card when the cards are different', () => {
    const wrapper = mount(<Card {...props} lastCard={{value: 10, ref: 222}} />);
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    jest.advanceTimersByTime(500);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(flipToBack).toHaveBeenCalledTimes(3);
  });
});
