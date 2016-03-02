import React, {View, Text, Image, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import Divider from './tableDivider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  userRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04
  },
  rowName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  imgUser: {
    height: width / 8,
    borderRadius: width / 16,
    width: width / 8,
  },
});

export default ({img, press, infos}) => {
  return <View>
    <View style={styles.userRow}>
      <Image source={img} resizeMode="contain" style={styles.imgUser}/>
      <View style={styles.rowName}>
        <TouchableHighlight underlayColor="transparent" onPress={() => press(infos)} >
        <Text>{infos.nom} {infos.prenom}</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight underlayColor="transparent" onPress={() => press(infos)} >
        <Image source={require('../../img/voir-plus.png')} />
      </TouchableHighlight>
    </View>
    <Divider />
  </View>
}
