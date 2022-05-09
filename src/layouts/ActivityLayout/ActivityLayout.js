import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import ButtonComponent from '../../components/Button';
import {Timer} from 'react-native-element-timer';
import Geolocation from '@react-native-community/geolocation';
import MapComponent from '../../components/Map';
import ActivityData from '../../components/ActivityData';
import BarChartComponent from '../../components/BarChart';
import Haversine from '../../helpers/Haversine';
import WeatherComponent from '../../components/Weather/WeatherComponent';
import DbHelper from '../../helpers/DbHelper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ActivityLayout.styles';
import ShareHelper from '../../helpers/ShareHelper';

export default function ActivityLayout() {
  const [location, setLocation] = useState(null);
  const [initCoords, setInitCoords] = useState({latitude: 39, longitude: 32});
  const [posHistory, setPosHistory] = useState([]);
  const [distance, setDistance] = useState(0);
  const [distanceTemp, setDistanceTemp] = useState(0);
  const [distanceOneMin, setDistanceOneMin] = useState([]);
  const [timer, setTimer] = useState(0);
  const [activityStart, setActivityStart] = useState(false);
  const [activityEnd, setActivityEnd] = useState(false);

  useEffect(() => {
    !!location && setPosHistory([...posHistory, location]);
    posHistory.length > 1 &&
      setDistance(
        distance +
          Haversine(
            posHistory[posHistory.length - 2].latitude,
            posHistory[posHistory.length - 2].longitude,
            posHistory[posHistory.length - 1].latitude,
            posHistory[posHistory.length - 1].longitude,
          ),
      );

    if (timer % 6 == 0) {
      let newArray = [...distanceOneMin];
      newArray.push(distance - distanceTemp);
      if (newArray.length > 6) {
        newArray.shift();
      }
      setDistanceOneMin(newArray);
      setDistanceTemp(distance);
    }
  }, [location]);
  const timerRef = useRef(null);
  function handleStart() {
    timerRef.current.start();
    setActivityStart(true);
    setActivityEnd(false);
  }
  function handleStop() {
    timerRef.current.stop();
    if (distance > 0) {
      DbHelper(distance, timer, posHistory);
    }
    setActivityStart(false);
    setActivityEnd(true);
  }
  function handleTime(e) {
    setTimer(e);
    if (e % 3 == 0 && e > 0) {
      getPosition();
    }
    if (e > 0 && e < 2) {
      getPosition();
    }
  }

  function getPosition() {
    Geolocation.getCurrentPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  return (
    <>
      <MapComponent
        initCoords={initCoords}
        location={location}
        posHistory={posHistory}
      />
      <View style={styles.BarChartContainer}>
        <BarChartComponent history={distanceOneMin} />
      </View>
      <View style={styles.dataContainer}>
        <Timer
          ref={timerRef}
          onTimes={e => {
            handleTime(e);
          }}
          onPause={e => {}}
          onEnd={e => {}}
        />

        <WeatherComponent />
        <ActivityData distance={distance} AvgSpeed={distance / timer} />
      </View>

      <Text>{/* <Icon name="run-fast" size={50} color="#4F8EF7" /> */}</Text>
      {!activityStart && (
        <ButtonComponent text="Start" onPress={handleStart} theme={'primary'} />
      )}
      {!!activityStart && (
        <ButtonComponent text="Stop" onPress={handleStop} theme={'secondary'} />
      )}
      {!!activityEnd && (
        <ButtonComponent
          text="SHARE"
          onPress={ShareHelper}
          theme={'secondary'}
        />
      )}
    </>
  );
}
