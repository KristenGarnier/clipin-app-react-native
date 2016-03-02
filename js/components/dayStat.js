import React, {View, Text, StyleSheet, Dimensions} from 'react-native';
import moment from 'moment';
import {green, black} from '../colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  statsBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    transform: [ { translateX: -15 } ],
    paddingHorizontal: 15,
    height: 100
  },
  statsBar: {
    width: 8,
    backgroundColor: green,
  },
  statsBarText: {
    fontSize: 12,
    position: 'absolute'
  },
  percentageSquare: {
    backgroundColor: black,
    paddingVertical: 5,
    width: width * 0.08
  },
  textPercentageSquare: {
    color: 'white',
    textAlign: 'center'
  },

});

export default ({date, nb, max}) => {
  const length = (nb / max) * 100;
  const dn = date.format('dddd').length - 5 > 0 ? date.format('dddd').length - 5 : -1;
  return <View>
    <View style={styles.statsBarContainer}>
      <Text style={[styles.statsBarText, {transform: [ { rotate: '-90deg' }, {translateX: -50}, {translateY: -2 * dn} ],} ]}>{date.format('dddd')}</Text>
      <View style={[styles.statsBar, { height: length}]}></View>
    </View>
    <View style={styles.percentageSquare}>
      <Text style={styles.textPercentageSquare}>{nb}</Text>
    </View>
  </View>
}