import React, {useState, useEffect, useCallback} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {Constants} from '../../constants/AppConstants';
import {Card} from '../card';
import {Header} from '../header';
import {randomNumGen} from '../../utils';

const CARD_NUM = 12;
const initialState = {
  lastCard: {},
  reset: 0,
  frozen: {},
  count: 0,
  cards: randomNumGen(CARD_NUM),
};

const Cards = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => checkGame(), [state.frozen]);

  const restart = () =>
    setState({
      frozen: {},
      reset: state.reset + 1,
      count: 0,
      lastCard: {},
      cards: randomNumGen(CARD_NUM),
    });

  const gameOver = () => {
    Alert.alert(
      Constants.ALERT_TITLE,
      `${Constants.GAME_SUCCESS_MSG} in ${state.count} steps`,
      [
        {
          text: Constants.TRY_AGAIN_BTN_LABEL,
          onPress: restart,
        },
      ],
    );
  };

  const checkGame = () => {
    const {frozen, cards} = state;

    if (Object.values(frozen).length === cards.length / 2) {
      gameOver();
    }
  };

  const flipCard = useCallback(
    ({num, ref: currentRef, matched}) =>
      setState(prevState => {
        const {
          frozen,
          lastCard: {value, ref: prevRef},
          count,
        } = prevState;

        if (prevRef === currentRef) {
          return {...prevState, lastCard: {}, count: count + 1};
        }

        return {
          ...prevState,
          count: count + 1,
          frozen: {...frozen, ...(value && matched && {[num]: num})},
          lastCard: {
            ref: value ? null : currentRef,
            ...(!value && {value: num}),
          },
        };
      }),
    [],
  );

  const {cards, count, frozen, lastCard, reset} = state;

  return (
    <View style={styles.rootContainer}>
      <Header count={count} resetListener={restart} />
      <View style={styles.container}>
        {cards?.map((item, index) => (
          <Card
            key={index}
            id={index}
            item={item}
            flipCard={flipCard}
            isFrozen={!!frozen[item]}
            reset={reset}
            lastCard={lastCard}
          />
        ))}
      </View>
    </View>
  );
};

export default Cards;
