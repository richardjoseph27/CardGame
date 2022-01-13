import {StyleSheet, Platform,StatusBar} from 'react-native';
import {APP_STYLES} from '../../style/StyleConstants';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? APP_STYLES.MAIN_CONTAINER_BG_COLOR:'',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;