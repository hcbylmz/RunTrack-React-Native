import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import routes from '../../Navigation/routes';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DashboardScreen.styles';
import ButtonComponent from '../../components/Button';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DashboardScreen() {
  const [userActivityDetails, setUserActivityDetails] = useState([]);
  const user = firebase.auth().currentUser;
  const [total_data, setTotalData] = useState(null);
  const userName = user && user.email.replace(/@.*$/, '');
  const navigation = useNavigation();
  const image = {
    uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/20/12/running.jpg',
  };
  useEffect(() => {
    handleUpdate();
  }, []);
  function handleSignOut() {
    auth().signOut();
  }
  function goToActivity() {
    navigation.navigate(routes.TRACK_ACTIVITY_SCREEN);
  }

  function handleUpdate() {
    database()
      .ref('/total_data/' + userName + '/')
      .once('value')
      .then(snapshot => {
        const result = Object.keys(snapshot.val()).map(key => [
          key,
          snapshot.val()[key],
        ]);
        setTotalData(result);
      });
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileBackground}></View>
        <View style={styles.icon}>
          <Icon name="user-circle" size={80} color="#4F8EF7" />
          <View style={styles.userName}>
            <Text style={styles.userNameText}>{userName}</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          {!!total_data ? (
            <View style={styles.textContainer}>
              <Text style={styles.dataText}>
                <MaterialIcon
                  name="clock-time-nine-outline"
                  size={25}
                  color="black"
                />
                {'  '} Total Time : {'  '} {total_data[1][1]}
              </Text>
              <Text style={styles.dataText}>
                <MaterialIcon
                  name="map-marker-distance"
                  size={25}
                  color="black"
                />
                {'  '} Total Meters : {'  '}
                {total_data[2][1]}
              </Text>
              <Text style={styles.dataText}>
                <MaterialIcon name="run" size={25} color="black" />
                {'  '} Total Activities : {'  '}
                {total_data[3][1]}
              </Text>
            </View>
          ) : (
            <Text>Data not found but we are trying our best to find it.</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            text="Sign Out"
            onPress={handleSignOut}
            theme="primary"
          />
          <ButtonComponent
            text="Activity"
            onPress={goToActivity}
            theme="secondary"
          />
        </View>
      </View>
    </>
  );
}
