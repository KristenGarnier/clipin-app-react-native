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
import Swtich from './components/switch';
import emitter from './Emitter';
import StateManager from './stateManager';
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
      user: StateManager.getUser(),
      tel: true,
      hobby: false
    };
  }

  _renderTable (general, advanced) {
    console.log(general, advanced);
    if (this.state.avanced) return <Table renders={advanced}/>;

    return <Table renders={general}/>
  }

  render () {

    const advanced = [
      {
        name : 'Hobbies',
        content : <Swtich value={this.state.hobby} key={0.1} onValueChange={this._handleSwitch} name="hobby" />
      },
      {
        name : 'Formation',
        content : <Swtich value={false} key={0.2} name='formation' />
      },
      {
        name : 'Expérience',
        content : <Swtich value={false} key={0.2} name='experience' />
      },
      {
        name : 'Compétences',
        content : <Swtich value={false} key={0.4} name='competence' />
      },
      {
        name : 'Préférences',
        content : <Swtich value={false} key={0.5} name='preference' />
      },
      {
        name : 'Permis',
        content : <Swtich value={false} key={0.6} name='permis' />
      },
      {
        name : 'Salaire minimum',
        content : <Swtich value={false} key={0.7} name='salaire' />
      }
    ];
    const general = [
      {
        name : 'Numéro de téléphone',
        content : <Swtich value={this.state.tel} key={1.1} onValueChange={this._handleSwitch} name="tel" />
      },
      {
        name : 'Nom & prénom',
        content : <Swtich value={true} key={1.2} name='nom' />
      },
      {
        name : 'Âge',
        content : <Swtich value={true} key={1.3} name='age' />
      },
      {
        name : 'Adresse',
        content : <Swtich value={true} key={1.4} name='adresse' />
      },
      {
        name : 'Mail',
        content : <Swtich value={true} key={1.5} name='mail' />
      },
      {
        name : 'Profession',
        content : <Swtich value={true} key={1.6} name='profession' />
      }
    ];
    const criteria = [
      {
        name : 'Je suis',
        content : this.state.user.etre || 'Pas encore défini'
      },
      {
        name : 'Je recherche',
        content : this.state.user.recherche || 'Pas encore défini'
      }
    ];

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
            {this._renderTable(general, advanced)}
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
    });
  }

  _handleSwitch(name){
    console.log(name);
  }

  _handleModify () {
    this.props.navigator.push({
      title: 'Modifer',
      component: ProfilModify,
      passProps: {
        data: this.state.user,
        change: (data) => {
          StateManager.updateUser(data);
          this.setState({user: data});
        }
      }
    })
  }
}

export default Profil;


