import {StyleSheet} from 'react-native';
import {APP_STYLES} from '../../style/StyleConstants';

const styles = StyleSheet.create({
  flipCardFront: {
    width: 120,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_STYLES.CARD_FRONT_COLOR,
    backfaceVisibility: 'hidden',
    marginBottom: 7,
    borderColor: APP_STYLES.CARD_BORDER_COLOR,
    borderWidth: 2,
    borderRadius: 9,
  },
  flipCardBack: {
    width: 120,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: APP_STYLES.CARD_BLACK_COLOR,
    position: 'absolute',
    top: 0,
    marginBottom: 7,
    borderColor: APP_STYLES.CARD_BORDER_COLOR,
    borderWidth: 2,
    borderRadius: 9,
  },
  flipTextFront: {
    color: APP_STYLES.CARD_TEXT_FRONT_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
  },
  flipTextBack: {
    color: APP_STYLES.CARD_TEXT_BAKC_COLOR,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default styles;