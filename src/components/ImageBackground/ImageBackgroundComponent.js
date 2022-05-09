import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './ImageBackgroundComponent.styles';

export default function ImageBackgroundComponent({children}) {
  const image = {uri: 'https://wallpaperaccess.com/full/5269322.jpg'};
  return (
    <ImageBackground
      source={image}
      style={styles.image}
      imageStyle={styles.imageStyling}>
      {children}
    </ImageBackground>
  );
}
