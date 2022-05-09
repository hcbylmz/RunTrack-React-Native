import React, {useEffect, useRef, useState} from 'react';
import {View, Button} from 'react-native';

import ActivityLayout from '../../layouts/ActivityLayout';

export default function TrackActivityScreen() {
  return (
    <View style={{flex: 1}}>
      <ActivityLayout />
    </View>
  );
}
