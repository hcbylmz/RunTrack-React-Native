import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import styles from './LeaderBoardScreen.styles';

export default function LeaderBoardScreen() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    handleDb();
  }, []);
  function handleDb() {
    database()
      .ref('/total_data')
      .limitToLast(50)
      .orderByChild('total_meters')
      .once('value', function (snapshot) {
        let newArray = [];
        snapshot.forEach(function (childSnapshot) {
          newArray.push(childSnapshot.val());
        });
        setUserList(newArray.reverse());
      });
  }
  function renderItem(item) {
    return (
      <View style={styles.list}>
        <Text>
          {item.item['username'] ? item.item['username'] : 'username'}-----
          {item.item['total_meters']}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LeaderBoard - First 50</Text>
      <FlatList data={userList} renderItem={renderItem} />
    </View>
  );
}
