import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../../../Screens/DashboardScreen';
import TrackActivityScreen from '../../../Screens/TrackActivityScreen';
import routes from '../../routes';

export default function DashboardStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name={routes.DASHBOARD}
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
      <Stack.Screen
        name={routes.TRACK_ACTIVITY_SCREEN}
        component={TrackActivityScreen}
      />
    </Stack.Navigator>
  );
}
