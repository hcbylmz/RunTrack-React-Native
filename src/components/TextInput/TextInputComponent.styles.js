import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  input: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 16,
    marginBottom: 15,
  },
  container: {
    marginHorizontal: 25,
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
  },
});
