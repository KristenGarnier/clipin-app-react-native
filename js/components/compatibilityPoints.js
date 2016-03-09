import React, {View, Text, StyleSheet, Dimensions} from 'react-native';
import {green} from '../colors';
import {selectColor} from '../utils';

const width = Dimensions.get('window').width;
const divided3 = width / 3;

const styles = StyleSheet.create({
  rowCompatibilityPoints: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: width * 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  setWidth: {
    width: divided3
  }
});

export default ({pointYou, comp, pointUser}) => {
  return <View style={styles.rowCompatibilityPoints}>
    <Text style={styles.setWidth}>{pointYou}</Text>
    <View style={styles.setWidth}>
      <Text style={{
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        width: width * 0.15,
        backgroundColor: selectColor(comp.length)
      }}>
        {comp}
      </Text>
    </View>
    <Text style={styles.setWidth}>{pointUser}</Text>
  </View>
}
