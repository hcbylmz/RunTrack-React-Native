import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './TextInputComponent.styles';

export default function TextInputComponent({
  onChangeText,
  value,
  type,
  secure,
  textContent,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textContent}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        keyboardType={type}
        secureTextEntry={secure}
      />
    </View>
  );
}
