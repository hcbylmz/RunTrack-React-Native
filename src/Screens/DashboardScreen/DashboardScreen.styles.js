import {StyleSheet, Dimensions} from 'react-native';
const widthDimensions = Dimensions.get('window').width;
const heightDimensions = Dimensions.get('window').height;

export default StyleSheet.create({
  error: {
    width: widthDimensions,
    height: heightDimensions / 2,
  },
  icon: {
    flexDirection: 'column',
    top: heightDimensions / 4.5,
  },
  userName: {
    justifyContent: 'center',
  },

  profileBackground: {
    height: heightDimensions,
    width: widthDimensions * 2,
    position: 'absolute',
    top: 0 - heightDimensions / 1.4,
    left: 0 - widthDimensions / 2,
    borderBottomLeftRadius: widthDimensions,
    borderBottomRightRadius: widthDimensions,
    backgroundColor: 'rgba(196, 200, 204, 1)',
  },
  buttonContainer: {
    width: '100%',
    height: 125,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#aabcbf',
  },
  dataContainer: {marginTop: 150},
  dataText: {
    fontSize: 20,
    color: 'black',
  },
  textContainer: {
    height: 100,
    justifyContent: 'space-between',
    width: 250,
  },
});
