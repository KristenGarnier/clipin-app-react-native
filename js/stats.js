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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import RowUser from './components/rowUser';
import UserProfil from './userProfile';
import Compatibility from './components/CompatibilityBar';
import Divider from './components/tableDivider';
import RowUserPercent from './components/rowUserPercent';
import RowUserLast from './components/rowUserLast';
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
  compatibiliteContainer: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.05,
  },
  imgUser: {
    height: width / 6,
    borderRadius: width / 12,
    width: width / 6,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10
  },
  statsBarContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    transform: [{translateX: -15}]
  },
  statsBar: {
    width: 8,
    height: 100,
    backgroundColor: green
  },
  statsBarText: {
    fontSize: 12,
    transform: [{rotate: '-90deg'}, {translateX: 12}, {translateY: 6}],
  },
  percentageSquare: {
    backgroundColor: black,
    padding: 5,
  }

});

class Stats extends Component {

  constructor () {
    super();

    this._handlePress = this._handlePress.bind(this);

    this.state = {
      user: [
        {
          compatibilite: 33,
          user: {
            nom: 'Duroux',
            prenom: 'Clement',
            age: 37,
            metier: 'coiffeur',
            entreprise: 'Open Classroom',
            mail: 'clement-duroux@gmail.com',
            tel: '06.01.02.03.04',
            adresse: {
              adresse: '255, avenue du stage',
              cp: 42000,
              ville: 'ST ETIENNE'
            }
          }
        }, {
          compatibilite: 69,
          user: {
            nom: 'Albahani',
            prenom: 'Malÿka',
            age: 23,
            metier: 'Eboueuse',
            entreprise: 'Municipalité',
            mail: 'malyka-albahani@gmail.com',
            tel: '06.01.02.03.04',
            adresse: {
              adresse: '255, avenue de la galère',
              cp: 42000,
              ville: 'ST ETIENNE'
            }
          }
        }
      ]
    }

  }

  render () {
    const users = this.state.user.map((user, i) => {
        return <RowUserPercent key={user.user.nom} img={require('../img/avatar-f.jpg')} press={this._handlePress}
                        infos={user}/>
    });
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={require('../img/banner-stats.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleSection}>
              <Text style={styles.textTitleSection}>STATISTIQUES</Text>
            </View>
          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Votre dernier match</Text>
            </View>
            <RowUserLast img={require('../img/avatar-m.jpg')} infos={this.state.user[0]} press={this._handlePress} />
            <View style={styles.compatibiliteContainer}>
              <Compatibility percentage='33' width={width}/>
            </View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Vos match de la semaine</Text>
            </View>
            <View style={styles.statsContainer}>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
              <View>
                <View style={styles.statsBarContainer}>
                  <Text style={styles.statsBarText}>Lundi</Text>
                  <View style={styles.statsBar}></View>
                </View>
                <View style={styles.percentageSquare}>
                  <Text style={{color: 'white'}}>10</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Vos meilleurs matchs</Text>
            </View>
            {users}
          </View>

        </View>
      </ScrollView >
    );
  }

  _handlePress (data) {
    this.props.navigator.push({
      title: `${data.user.nom} ${data.user.prenom}`,
      component: UserProfil,
      passProps: {
        data: data
      }
    })
  }
}

export default Stats;


