import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './stacks/AuthStack';
import LoginStack from './stacks/LoginStack';

export default function Navigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  if (!user) {
    const Stack = createNativeStackNavigator();
    return <AuthStack />;
  }
  return <LoginStack />;
}
