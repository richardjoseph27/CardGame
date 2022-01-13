import {Animated} from 'react-native';

export const flipToBack = animate => 
    Animated.timing(animate, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();