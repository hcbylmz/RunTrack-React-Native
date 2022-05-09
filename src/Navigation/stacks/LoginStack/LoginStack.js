import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LeaderBoardScreen from '../../../Screens/LeaderBoardScreen';
import routes from '../../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardStack from '../DashboardStack';
import HistoryStack from '../HistoryStack';

export default function LoginStack() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: 60},
        }}>
        <Tab.Screen
          name={routes.DASHBOARD_STACK}
          component={DashboardStack}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={routes.HISTORY_STACK}
          component={HistoryStack}
          options={{
            tabBarLabel: 'History',
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="history" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.LEADERBOARD}
          component={LeaderBoardScreen}
          options={{
            tabBarLabel: 'LeaderBoard',
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="bulletin-board"
                color={color}
                size={40}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
