import React from 'react';
import {View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import styles from './BarChartComponent.styles';

export default function BarChartComponent({history}) {
  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              data: history,
            },
          ],
        }}
        width={styles.width}
        height={styles.height}
        yAxisSuffix="M"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={styles.chartConfig}
        bezier
        style={styles.spaces}
      />
    </View>
  );
}
