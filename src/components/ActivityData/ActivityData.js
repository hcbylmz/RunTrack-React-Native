import React from 'react';
import {View, Text} from 'react-native';

export default function ActivityData({distance, AvgSpeed}) {
  return (
    <View>
      <Text>Total Distance: {distance}</Text>
      <Text>
        Average Speed:{Math.round(AvgSpeed) ? Math.round(AvgSpeed) : '0'}
      </Text>
    </View>
  );
}
