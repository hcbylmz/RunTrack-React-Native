import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ButtonComponent.styles';

export default function ButtonComponent({onPress, text, theme}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
