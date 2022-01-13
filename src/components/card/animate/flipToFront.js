import {Animated} from 'react-native';

export const flipToFront = animate =>
    Animated.timing(animate, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  