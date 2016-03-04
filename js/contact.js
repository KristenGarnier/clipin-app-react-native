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

import RowUser from './components/rowUser';
import UserProfil from './userProfile';
import {green} from './colors';
import {getRelations, getUser} from './api';
import {getRelation} from './stateManager';

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
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  titleSection: {

    backgroundColor: 'rgba(0,0,0, 0.5)',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textTitleSection: {
    color: 'white',
    fontSize: 18,
    textAlign: 'right'
  },
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
  }
});

class Contact extends Component {

  constructor () {
    super();

    this._handlePress = this._handlePress.bind(this);

    this.state = {
      user: getRelation()
    };

  }

  componentDidMount () {
  }

  render () {
    const users = this.state.user.map(user => {
      user.target = Object.assign(user.target, { compatibilite : user.compatibilite});
      return <RowUser key={user.target.uuid} img={{uri: user.target.image, scale: 3}} press={this._handlePress}
                      infos={user.target}/>
    });
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={require('../img/banner-contact.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleSection}>
              <Text style={styles.textTitleSection}>CONTACTS</Text>
            </View>
          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Mes clips</Text>
            </View>
            {users}
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Mes clips manuels</Text>
            </View>
            {users}
          </View>

        </View>
      </ScrollView >
    );
  }

  _handlePress (data) {
    this.props.navigator.push({
      title: `${data.nom} ${data.prenom}`,
      component: UserProfil,
      passProps: {
        data: data
      }
    })
  }
}

export default Contact;


