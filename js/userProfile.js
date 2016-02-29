/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

import Divider from './components/tableDivider';
import Row from './components/tableRow';
import Table from './components/tableParam';
import Compatibility from './components/CompatibilityBar';
import {criteria, advanced, general} from './tableData';
import ProfilModify from './profilModif';

import {green, black} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {},
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    alignItems: 'center',
    height: height * 0.3,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: width * 0.1
  },
  imgUser: {
    height: width / 4,
    borderRadius: width / 8,
    width: width / 4,
    marginLeft: width * 0.05
  },
  textName: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  infosContainer: {
    marginTop: 20
  },
  textInfos: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  tableContainer: {
    borderTopColor: green,
    borderTopWidth: 3,
    flex: 1,
    flexDirection: 'column'
  },
  modificationContainer: {
    marginTop: 20
  },
  greenColor: {
    color: green
  },
  tableSection: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10
  },
  tableSectionText: {
    color: 'white',
    fontWeight: '500'
  },
  tableSectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerText: {
    textAlign: 'center'
  },
  compatibiliteContainer: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.05,
  }
});

class Profil extends Component {

  constructor () {
    super();

    this.state = {
      compatibilite: 33
    };

  }

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={require('../img/bureau.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <Image source={require('../img/avatar-m.jpg')} resizeMode="contain" style={styles.imgUser}/>
          <View style={styles.textContainer}>
            <Text style={styles.textName}>Clément Duroux</Text>
            <View style={styles.infosContainer}>
              <Text style={styles.textInfos}>37 ans</Text>
              <Text style={styles.textInfos}>Coiffeuse</Text>
              <Text style={styles.textInfos}>OpenClassrooms</Text>
            </View>

          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Compatibilité avec moi</Text>
            </View>
            <View style={styles.compatibiliteContainer}>
              <Compatibility percentage={this.state.compatibilite} width={width} />
            </View>
          </View>

        </View>
      </ScrollView >
    );
  }
}

export default Profil;
