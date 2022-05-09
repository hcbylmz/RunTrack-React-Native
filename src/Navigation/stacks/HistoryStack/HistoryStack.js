import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../../routes';
import HistoryScreen from '../../../Screens/HistoryScreen/HistoryScreen';
import HistoryDetailsScreen from '../../../Screens/HistoryDetailsScreen/HistoryDetailsScreen';

export default function HistoryStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name={routes.HISTORY}
        component={HistoryScreen}
        options={{title: 'Activities History'}}
      />
      <Stack.Screen
        name={routes.HS_DETAILS}
        component={HistoryDetailsScreen}
        options={{title: 'Run Details'}}
      />
    </Stack.Navigator>
  );
}
