import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  chartConfig: {
    backgroundColor: '#118ab2',
    backgroundGradientFrom: '#bac8d1',
    backgroundGradientTo: '#61a0c9',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '12',
      strokeWidth: '6',
      stroke: '#ffa726',
    },
  },
  spaces: {
    marginVertical: 0,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  width: Dimensions.get('window').width - 50,
  height: 180,
});
