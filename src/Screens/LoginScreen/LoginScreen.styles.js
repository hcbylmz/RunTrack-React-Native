import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {},
  container: {height: Dimensions.get('window').height},
  imageStyling: {
    opacity: 0.4,
  },
  buttonContainer: {
    marginTop: 50,
    height: 150,
    justifyContent: 'space-around',
  },
});
