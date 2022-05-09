import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import styles from './MapComponent.styles';

export default function MapComponent({initCoords, location, posHistory}) {
  return (
    <MapView
      fitToElements={true}
      style={styles.container}
      region={{
        latitude: location ? location.latitude : initCoords.latitude,
        longitude: location ? location.longitude : initCoords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      showsUserLocation={true}
      loadingEnabled={true}>
      {!!location && (
        <>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
          <Marker
            coordinate={{
              latitude: initCoords.latitude,
              longitude: initCoords.longitude,
            }}
          />
          <Polyline
            coordinates={posHistory}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={6}
          />
        </>
      )}
    </MapView>
  );
}
