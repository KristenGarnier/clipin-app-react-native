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
} from 'react-native';

import {green, grey} from './colors';
import RowPicker from './components/rowPicker';
import FMPicker from 'react-native-fm-picker';
import Row from './components/tableRow';
import Switch from './components/switch';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var etreOptions = [ 'Ouvert(e) aux opportunitées', 'Déjà employé' ];
var rechercheOptions = [ 'Un emploi', 'Un employé' ];
var metiersOptions = [ 'Coiffeur', 'Sys admin', 'Développeur' ];
var diplomeOptions = [ 'DUT', 'CAP', 'BTS', 'LICENCE 1', "LICENCE 2", "LICENCE 3", "LICENCE PRO", "MASTER PRO", 'DEUG', 'BAC', 'MASTER 1', 'MASTER 2', 'DOCTORAT', 'BACHELOR' ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
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
  input: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  greenColor: {
    color: green
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: grey,
    paddingTop: 10,
    paddingBottom: 10
  },
  avancedText: {
    paddingBottom: 20,
    paddingTop: 20,
    color: green
  },
  advancedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bigInput: {
    height: 150,
  }
});

class Profil extends Component {

  constructor (props) {
    super(props);

    this._handlePicker = this._handlePicker.bind(this);
    this._renderAdvanced = this._renderAdvanced.bind(this);
    this._handlePress = this._handlePress.bind(this);
    this._handleChange = this._handleChange.bind(this);

    this.state = Object.assign(props.data, {
      etre: etreOptions[ 0 ],
      recherche: rechercheOptions[ 0 ],
      advanced: false,
      diplome: diplomeOptions[ 0 ],
      preferences: '',
      hobbies: '',
    });

  }

  _renderAdvanced () {
    if (this.state.advanced) {
      return <View>
        <RowPicker
          name="Dernier diplôme"
          options={diplomeOptions}
          selected={this.state.diplome}
          submit={this._handlePicker}
          stateName="diplome"
        />

        <Row name={'Permis'} content={<Switch/>}/>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(salaire_minimum) => {this.setState({salaire_minimum})}}
            value={String(this.state.salaire_minimum)}
            keyboardType="number-pad"
            placeholder="Salaire minimum"
            autoCorrect={false}
            placeholderTextColor={grey}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(hobbies) => this.setState({hobbies})}
            value={this.state.hobbies}
            placeholder="Hobbies ( séparés par une virgule )"
            placeholderTextColor={grey}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.bigInput]}
            onChangeText={(experiences_pro) => this.setState({experiences_pro})}
            value={this.state.experiences_pro}
            placeholder="Expériences professionnelles"
            placeholderTextColor={grey}
            multiline={true}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.bigInput]}
            onChangeText={(competence) => this.setState({competence})}
            value={this.state.competence}
            placeholder="skills"
            placeholderTextColor={grey}
            multiline={true}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.bigInput]}
            onChangeText={(preferences) => this.setState({preferences})}
            value={this.state.preferences}
            placeholder="Préférences"
            placeholderTextColor={grey}
            multiline={true}
          />
        </View>

      </View>
    }

    return;
  }

  render () {
    return (
      <ScrollView >
        <View style={styles.container}>
          <Image source={{uri: this.state.image, scale: 3}} resizeMode="contain" style={styles.imgUser}/>
          <View style={styles.textContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={(nom) => {
                    this.setState({nom});
                    this._handleChange(this.state)
                  }
                }
                value={this.state.nom}
                placeholder="Votre nom"
                autoCorrect={false}
                placeholderTextColor={grey}
                clearButtonMode="while-editing"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={(prenom) => {
                    this.setState({prenom});
                    this._handleChange(this.state)
                  }
                }
                value={this.state.prenom}
                placeholder="Votre prénom"
                autoCorrect={false}
                placeholderTextColor={grey}
                clearButtonMode="while-editing"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={(age) => {
                    this.setState({age});
                    this._handleChange(this.state)
                  }
                }
                value={String(this.state.age)}
                keyboardType="number-pad"
                placeholder="Numéro de téléphone"
                autoCorrect={false}
                placeholderTextColor={grey}
                clearButtonMode="while-editing"
              />
            </View>

          </View>
        </View>
        <View>
          <RowPicker
            name="Je suis"
            options={etreOptions}
            selected={this.state.etre}
            submit={this._handlePicker}
            stateName="etre"
          />
          <RowPicker
            name="Je recherche"
            options={rechercheOptions}
            selected={this.state.recherche}
            submit={this._handlePicker}
            stateName="recherche"
          />
        </View>
        <View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(metier) => {
                    this.setState({metier});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.metier}
              placeholder="Métier"
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(email) => {
                    this.setState({email});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.email}
              keyboardType="email-address"
              placeholder="Email"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(num) => {
                    this.setState({num});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.tel}
              keyboardType="number-pad"
              placeholder="Numéro de téléphone"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(adresse) => {
                    this.setState({adresse});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.adresse}
              placeholder="Adresse"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(cp) => {
                    this.setState({cp});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.cp}
              keyboardType="number-pad"
              placeholder="Code postal"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(ville) => {
                    this.setState({ville});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.ville}
              placeholder="Ville"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(entreprise) => {
                    this.setState({entreprise});
                    this._handleChange(this.state)
                  }
                }
              value={this.state.entreprise}
              placeholder="Nom de l'entreprise"
              autoCorrect={false}
              placeholderTextColor={grey}
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        <View style={styles.advancedContainer}>
          <Text
            style={styles.avancedText}
            onPress={this._handlePress}
          >
            {this.state.advanced ?
              'Masquer les paramètres avancés'
              :
              'Afficher les paramètres avancés'
            }
          </Text>
        </View>
        {this._renderAdvanced()}
      </ScrollView >
    );
  }

  _handlePicker (option, stateName) {
    let obj = {};
    obj[ stateName ] = option;
    this.setState(obj);
  }

  _handlePress () {
    this.setState({
      advanced: !this.state.advanced
    })
  }

  _handleChange (state) {
    this.props.change(state);
  }
}

export default Profil;


