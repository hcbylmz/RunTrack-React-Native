import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
import DateHelper from '../DateHelper';
import DbWrite from './DbWrite';

export default function DbHelper(distance, time, posHistory) {
  const {day, month, year, nowTime} = DateHelper();
  let userName, userId, firstData;

  const user = firebase.auth().currentUser;
  if (user) {
    userId = user.uid;
    userName = user.email.replace(/@.*$/, '');
  }
  const ref =
    '/users/' +
    userId +
    '/' +
    day +
    '-' +
    month +
    '-' +
    year +
    '---' +
    nowTime +
    '/';
  const writeParams = {
    username: userName,
    distance: distance,
    time: time,
    posHistory: posHistory,
  };

  DbWrite(ref, writeParams);
  database()
    .ref('/total_data/' + userName)
    .once('value')
    .then(snapshot => {
      firstData = snapshot.val();
      !!firstData
        ? database()
            .ref('/total_data/' + userName + '/')
            .update({
              total_meters: distance + firstData.total_meters,
              total_time: firstData.total_time + time,
              total_activities: firstData.total_activities + 1,
              username: userName,
            })
            .then(() => {})
        : database()
            .ref('/total_data/' + userName + '/')
            .update({
              total_meters: distance,
              total_time: time,
              total_activities: 1,
              username: userName,
            })
            .then(() => {});
    });
}
