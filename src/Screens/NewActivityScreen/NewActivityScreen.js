import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import routes from '../../Navigation/routes';

export default function NewActivityScreen() {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate(routes.TRACK_ACTIVITY_SCREEN);
  }
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>START</Text>
      </TouchableOpacity>
    </View>
  );
}
