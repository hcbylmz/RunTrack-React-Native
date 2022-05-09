import {firebase} from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, ActivityIndicator} from 'react-native';
import useDbRead from '../../helpers/DbHelper/DbRead';
import routes from '../../Navigation/routes';
import ButtonComponent from '../../components/Button';
import styles from './HistoryScreen.styles';

export default function HistoryScreen() {
  const navigation = useNavigation();
  const [dbValue, setDbValue] = useState();
  const userId = firebase.auth().currentUser.uid;
  const data = useDbRead('/users/' + userId + '/');
  useEffect(() => {
    const result = !!data && Object.keys(data).map(key => [key, data[key]]);
    setDbValue(result);
  }, [data]);
  function renderItem(item) {
    return (
      <View>
        {!!dbValue ? (
          <View style={styles.list}>
            <Text style={styles.text}>{item.item[0]}</Text>
            <View style={styles.buttonContainer}>
              <ButtonComponent
                text="Details"
                onPress={() => {
                  showDetails(item);
                }}
                theme={'secondary'}
              />
            </View>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    );
  }

  function showDetails(detail) {
    navigation.navigate(routes.HS_DETAILS, {detail});
  }
  return (
    <View>
      <FlatList data={dbValue} renderItem={renderItem} />
    </View>
  );
}
