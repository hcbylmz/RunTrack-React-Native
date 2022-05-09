import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import useAxios from '../../helpers/ApiHelper';
import Geolocation from '@react-native-community/geolocation';
import styles from './WeatherComponent.styles';

export default function WeatherComponent({lat, lon}) {
  const [weatherPos, setWeatherPos] = useState({lat: 32, lon: 29});
  const {data, error, isLoading} = useAxios(weatherPos);

  useEffect(() => {
    async function getLocation() {
      Geolocation.getCurrentPosition(info => {
        setWeatherPos({lat: info.coords.latitude, lon: info.coords.longitude});
      });
    }
    getLocation();
  }, []);
  return (
    <>
      {data && (
        <View style={styles.container}>
          <Text>Weather:{Math.round(data.current.temp - 273.15)}</Text>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
            }}
            style={styles.icon}
          />
        </View>
      )}
    </>
  );
}
