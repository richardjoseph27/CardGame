import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Constants} from '../../constants/AppConstants';

const Header = ({count, resetListener}) => {
  return (
    <View style={styles.topLabelContainer}>
      <TouchableOpacity onPress={resetListener}>
        <Text style={styles.topLabel}>{Constants.RESTART_BTN_LABEL}</Text>
      </TouchableOpacity>
      <Text style={styles.topLabel}>{`${Constants.COUNT_LABEL}${count}`}</Text>
    </View>
  );
};

export default Header;
