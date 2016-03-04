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
import {criteria, advanced, general} from './tableData';
import {getUser} from './stateManager';
import ProfilModify from './profilModif';

import {green} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

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
  }
});

class Profil extends Component {

  constructor () {
    super();

    this._handlePress = this._handlePress.bind(this);
    this._handleModify = this._handleModify.bind(this);

    this.state = {
      avanced: false,
      user: getUser()
    }

  }

  _renderTable () {
    if (this.state.avanced) return <Table renders={advanced}/>;

    return <Table renders={general}/>
  }

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <Image source={require('../img/bureau.jpg')} resizeMode="cover" style={styles.imgContainer}>
          <Image source={{uri: this.state.user.image, scale: 3}} resizeMode="contain" style={styles.imgUser}/>
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{this.state.user.prenom} {this.state.user.nom}</Text>
            <View style={styles.infosContainer}>
              <Text style={styles.textInfos}>{this.state.user.age} ans</Text>
              <Text style={styles.textInfos}>{this.state.user.metier}</Text>
              <Text style={styles.textInfos}>{this.state.user.entreprise}</Text>
            </View>

            <View style={styles.modificationContainer}>
              <Text style={[styles.textInfos, styles.greenColor]} onPress={this._handleModify}>Modifier</Text>
            </View>

          </View>
        </Image>
        <View style={styles.tableContainer}>
          <View>
            <View style={styles.tableSection}>
              <Text style={styles.tableSectionText}>Mes Critères</Text>
            </View>
            <Table renders={criteria}/>
            <View style={styles.tableSectionContainer}>
              <View style={[styles.tableSection, this.state.avanced ? {} : {backgroundColor: '#323232'}]}>
                <Text style={[styles.tableSectionText, styles.centerText]} onPress={() => {
                                this._handlePress('general');
                                }}>Paramètres généraux</Text>
              </View>
              <View style={[styles.tableSection, this.state.avanced ? {backgroundColor: '#323232'} : {} ]}>
                <Text style={[styles.tableSectionText, styles.centerText]} onPress={this._handlePress}>Avancés</Text>
              </View>
            </View>
            {this._renderTable()}
          </View>

        </View>
      </ScrollView >
    );
  }

  _handlePress (param) {
    if (param === 'general' && !this.state.avanced) {
      return;
    } else if (param !== 'general' && this.state.avanced) {
      return;
    }
    this.setState({
      avanced: !this.state.avanced
    })
  }

  _handleModify () {
    this.props.navigator.push({
      title: 'Modifer',
      component: ProfilModify,
      passProps: {
        data: this.state.user,
        change: (data) => {
          console.log(data);
          this.setState({user: data});
        }
      }
    })
  }
}

export default Profil;


