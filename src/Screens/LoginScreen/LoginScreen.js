import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/Button';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import routes from '../../Navigation/routes';
import {useNavigation} from '@react-navigation/native';
import styles from './LoginScreen.styles';
import ImageBackgroundComponent from '../../components/ImageBackground/ImageBackgroundComponent';
export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  function handleLogin() {
    auth().signInWithEmailAndPassword(username, password);
  }
  function goToRegister() {
    navigation.navigate(routes.REGISTER);
  }
  const image = {uri: 'https://wallpaperaccess.com/full/5269322.jpg'};
  return (
    <ImageBackgroundComponent
      children={
        <View style={styles.container}>
          <TextInputComponent
            value={username}
            onChangeText={setUsername}
            type={'email-address'}
            textContent={'Email Adress'}
          />
          <TextInputComponent
            value={password}
            onChangeText={setPassword}
            textContent={'Password'}
            secure
          />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={handleLogin}
              text="Login"
              theme={'primary'}
            />
            <ButtonComponent
              onPress={goToRegister}
              text="Register"
              theme={'secondary'}
            />
          </View>
        </View>
      }
    />
  );
}
