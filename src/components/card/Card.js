import React, {useRef, useEffect} from 'react';
import {Animated, TouchableOpacity, Text} from 'react-native';
import {
  flipToBack,
  flipToFront,
  getBackAnimationStyle,
  getFrontAnimationStyle,
} from './animate';
import styles from './styles';

const shouldRender = ({isFrozen: prevFrozen}, {isFrozen: currFrozen}) =>
  prevFrozen && currFrozen;

const Card = React.memo(
  ({id, item, flipCard, reset, isFrozen, lastCard: {value, ref: prevRef}}) => {
    const ref = useRef(new Animated.Value(0)).current;

    let flip = 0;
    ref.addListener(({value}) => (flip = value));

    useEffect(() => {
      console.log(reset)
      flipToBack(ref)
    }, [reset]);

    const onPress = ({num}) => {
      if (isFrozen) {
        return;
      }

      const matched = !value || value === num;

      flipCard({num, ref, matched});
      !!flip ? flipToBack(ref) : flipToFront(ref);

      if (matched) {
        return;
      }

      setTimeout(() => {
        prevRef && flipToBack(prevRef);
        flipToBack(ref);
      }, 1000);
    };

    return (
      <TouchableOpacity key={id} onPress={() => onPress({num: item})}>
        <Animated.View
          style={[styles.flipCardFront, getFrontAnimationStyle(ref)]}>
          <Text style={styles.flipTextFront}>{'?'}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.flipCardBack, getBackAnimationStyle(ref)]}>
          <Text style={styles.flipTextBack}>{item}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  },
  shouldRender,
);

export default Card;
