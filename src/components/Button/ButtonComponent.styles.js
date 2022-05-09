import {StyleSheet, Dimensions} from 'react-native';
const button = {
  height: 50,
  borderWidth: 2,
  borderRadius: 10,
  justifyContent: 'center',
};
export default StyleSheet.create({
  primary: {...button, backgroundColor: 'green', borderColor: 'green'},
  secondary: {...button, backgroundColor: '#14c0f5', borderColor: '#14c0f5'},
  text: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});
