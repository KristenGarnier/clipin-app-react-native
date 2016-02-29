import React, {View, Text, StyleSheet, Dimensions} from 'react-native';
import {black, green} from '../colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  compatibiliteRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  percentage: {
    backgroundColor: black,

  },
  textPercentage: {
    color: 'white',
    padding: 15
  },
  compatibiliteColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  textPercentageText: {
    padding: 5,
    fontSize: 19
  },
  barreCompatibilite: {
    flex: 1,
    backgroundColor: black
  },
  trueBarreCompatibilite: {
    backgroundColor: green,
    height: 14
  }
});

export default ({percentage}) => {
  const is100 = Number(percentage) === 100 ? 0.33 : 0.3;
  const lenghtBar = percentage / 100 - ( is100 * (percentage / 100));
  return <View style={styles.compatibiliteRow}>
    <View style={styles.percentage}>
      <Text style={styles.textPercentage}>
        {percentage}
      </Text>
    </View>
    <View style={styles.compatibiliteColumn}>
      <Text style={styles.textPercentageText}>
        %
      </Text>
      <View style={styles.barreCompatibilite}>
        <View style={[styles.trueBarreCompatibilite, {width: width * lenghtBar}]}>
        </View>
      </View>
    </View>

  </View>
}
