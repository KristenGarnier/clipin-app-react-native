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
import {confidential, sociaux} from './tableData';
import ProfilModify from './profilModif';
import {green} from './colors';

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
    flex:1,
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
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  titleSection: {

    backgroundColor: 'rgba(0,0,0, 0.5)',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:40,
    paddingRight:40,
  },
  textTitleSection: {
    color: 'white',
    fontSize: 18,
    textAlign: 'right'
  }
});

class Profil extends Component {

  constructor() {
    super();

    this._handlePress = this._handlePress.bind(this);
    this._handleModify = this._handleModify.bind(this);

    this.state = {
      avanced: false
    }


  }

  _renderTable() {
    if(this.state.avanced) return <Table  renders={advanced}/>;

    return <Table  renders={general}/>
  }


  render() {
    return (
      <ScrollView  style={styles.mainContainer}>
        <Image source={require('../img/banner-settings.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleSection}>
              <Text style={styles.textTitleSection}>RÉGLAGES</Text>
            </View>
          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Confidentialité</Text>
            </View>
            <Table renders={confidential}/>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Réseaux sociaux</Text>
            </View>
            <Table renders={sociaux}/>
          </View>

        </View>
      </ScrollView >
    );
  }

  _handlePress(param){
    if(param === 'general' && !this.state.avanced){
      return;
    } else if(param !== 'general' && this.state.avanced){
      return;
    }
    this.setState({
      avanced: !this.state.avanced
    })
  }

  _handleModify(){
    this.props.navigator.push({
      title: 'Modifer',
      component: ProfilModify
    })
  }
}

export default Profil;


