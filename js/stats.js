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
import DayStat from './components/dayStat';
import StateManager from './stateManager';
import emitter from './Emitter';
import constants from './constants';
import moment from 'moment';
import fr from 'moment/locale/fr';
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
  }

});

class Stats extends Component {

  constructor () {
    super();

    this._handlePress = this._handlePress.bind(this);

    this.state = {
      user: StateManager.get10highest(),
      stats: Array.apply(null, new Array(7)).map(i => {
        return Math.floor(Math.random() * (100 - 1));
      }),
      last: StateManager.getLastClip()
    }

  }

  componentDidMount () {
    this.listener = emitter.addListener(constants.USER_ADDED, () => {
      this.setState({
        user: StateManager.get10highest(),
        last: StateManager.getLastClip()
      });
    })
  }

  componentWillUnmount () {
    this.listener.remove();
  }

  render () {
    const users = this.state.user.map(user => {
      return <RowUserPercent key={user.target.nom} img={{uri: user.target.image, scale: 3}} press={this._handlePress}
                             infos={user}/>
    });

    const maxDay = Math.max.apply(null, this.state.stats);
    const days = this.state.stats.map((day, i) => {
      return <DayStat key={i} date={moment(fr).subtract(i, 'day')} nb={day} max={maxDay}/>
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

            {
              this.state.user[ 0 ] ?
                <View>
                  <RowUserLast img={{uri: this.state.last.target.image, scale: 3}}
                               infos={this.state.last} press={this._handlePress}/>
                  <View style={styles.compatibiliteContainer}>
                    <Compatibility percentage={this.state.last.compatibilite} width={width}/>
                  </View>
                </View>
                :

                <Text>Pas encore de clip</Text>

            }


            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Vos match de la semaine</Text>
            </View>

            {
              this.state.user[ 0 ] ?
                <View style={styles.statsContainer}>
                  {days}
                </View>
                :

                <Text>Pas encore de clip</Text>

            }
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Vos meilleurs matchs</Text>
            </View>
            {
              this.state.user[ 0 ] ?
                users
                :

                <Text>Pas encore de clip</Text>

            }
          </View>

        </View>
      </ScrollView >
    );
  }

  _handlePress (data) {
    this.props.navigator.push({
      title: `${data.target.nom} ${data.target.prenom}`,
      component: UserProfil,
      passProps: {
        data: Object.assign(data.target, { compatibilite: data.compatibilite })
      }
    })
  }
}

export default Stats;


