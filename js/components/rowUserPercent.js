import React, {View, Image, Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import {green} from '../colors';
import Divider  from './tableDivider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
  imgUser: {
    height: width / 6,
    borderRadius: width / 12,
    width: width / 6,
  },
  userLast: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04
  },
  rowUserInfos: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  userNameBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  userPercent: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  percentNumber: {
    fontWeight: '100',
    color: green,
    fontSize: 35
  },
  percentPercent: {
    fontWeight: '100',
    color: green,
    alignSelf: 'flex-end',
    paddingBottom: 6
  }
});

export default ({infos, img, press}) => {
  return <View>
    <View style={styles.userLast}>
      <Image source={img} resizeMode="contain" style={styles.imgUser} />
      <View style={styles.rowUserInfos}>
        <Text style={styles.userNameBold}>{infos.user.prenom} {infos.user.nom}</Text>
        <Text>{infos.user.metier}</Text>
        <Text>{infos.user.entreprise}</Text>
      </View>
      <View style={styles.userPercent}>
        <Text style={styles.percentNumber}>{infos.compatibilite}</Text>
        <Text style={styles.percentPercent}>%</Text>
      </View>
      <TouchableHighlight underlayColor="transparent" onPress={() => press(infos)}>
        <Image source={require('../../img/voir-plus.png')} />
      </TouchableHighlight>
    </View>
    <Divider />
  </View>
}
