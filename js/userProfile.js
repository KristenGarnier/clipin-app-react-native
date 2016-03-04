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

import Compatibility from './components/CompatibilityBar';
import CompatibilityPoints from './components/compatibilityPoints';
import RowIcon from './components/tableRowIcon';
import Divider from './components/tableDivider';
import {criteria, advanced, general} from './tableData';

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
  },
  dividerRight: {
    borderRightColor: 'white',
    borderRightWidth: 1
  },
  containerCompatibilityPoints: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20
  },
});

class Profil extends Component {

  constructor (props) {
    super(props);

    this.state = props.data;

  }

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={require('../img/bureau.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <Image source={{uri: this.state.image, scale: 3}} resizeMode="contain" style={styles.imgUser}/>
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{this.state.prenom} {this.state.nom}</Text>
            <View style={styles.infosContainer}>
              <Text style={styles.textInfos}>{this.state.age} ans</Text>
              <Text style={styles.textInfos}>{this.state.metier}</Text>
              <Text style={styles.textInfos}>{this.state.entreprise}</Text>
            </View>

          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Compatibilité avec moi</Text>
            </View>
            <View style={styles.compatibiliteContainer}>
              <Compatibility percentage={this.state.compatibilite} width={width}/>
            </View>
            <View style={styles.tableSectionContainer}>
              <View style={[styles.tableSection, styles.dividerRight]}>
                <Text style={[styles.tableSectionText, styles.centerText]}>Vous</Text>
              </View>
              <View style={[styles.tableSection]}>
                <Text style={[styles.tableSectionText, styles.centerText]}>{this.state.prenom}</Text>
              </View>
            </View>
            <View style={styles.containerCompatibilityPoints}>
              <CompatibilityPoints pointYou="Coiffeuse" pointUser="coiffeur" comp="+++"/>
              <CompatibilityPoints pointYou="Cuisine" pointUser="Cuinise" comp="++"/>
              <CompatibilityPoints pointYou="Naturisme" pointUser="Timide" comp="+"/>
            </View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Coordonnées</Text>
            </View>
            <RowIcon img={require('../img/tel.png')} text={this.state.tel} />
            <Divider />
            <RowIcon img={require('../img/loc.png')} text={`${this.state.adresse} ${this.state.cp} ${this.state.ville}`} />
            <Divider />
            <RowIcon img={require('../img/mail.png')} text={this.state.email} />
            <Divider />
            <RowIcon img={require('../img/profession.png')} text={this.state.metier} />
            <Divider />
            <RowIcon img={require('../img/bougie.png')} text={`${this.state.age} ans`} />
            <Divider />
            <RowIcon img={require('../img/entreprise.png')} text={this.state.entreprise} />
            <Divider />
          </View>

        </View>
      </ScrollView >
    );
  }
}

export default Profil;
