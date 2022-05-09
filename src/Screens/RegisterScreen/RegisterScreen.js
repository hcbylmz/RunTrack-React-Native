import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import ButtonComponent from '../../components/Button';
import TextInputComponent from '../../components/TextInput';
import ImageBackgroundComponent from '../../components/ImageBackground/ImageBackgroundComponent';
import styles from './RegisterScreen.styles';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  function handleRegister() {
    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {})

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use');
        }

        if (error.code === 'auth/invalid-email') {
          alert('Invalid email address');
        }
      });
  }
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

          <TextInputComponent
            value={password2}
            onChangeText={setPassword2}
            textContent={'Confirm Password'}
            secure
          />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              text="Register"
              onPress={handleRegister}
              theme={'secondary'}
            />
          </View>
        </View>
      }
    />
  );
}
