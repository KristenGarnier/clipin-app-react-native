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

import {green, grey} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        borderBottomWidth:1,
        borderBottomColor: grey,
        paddingTop: 10,
        paddingBottom: 10
    }
});

class Profil extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            mail: '',
            num: '',
            numDom: '',
            numPro: '',
            adresse: '',
            cp: '',
            ville: '',
            enterprise: ''
        }

    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../img/avatar-f.jpg')} resizeMode="contain" style={styles.imgUser}/>
                    <View style={styles.textContainer}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                                placeholder="Votre nom"
                                autoCorrect={false}
                                placeholderTextColor={grey}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(age) => this.setState({age})}
                                    value={this.state.age}
                                keyboardType="number-pad"
                                placeholder="Votre âge"
                                autoCorrect={false}
                                placeholderTextColor={grey}
                            />
                        </View>

                    </View>
                </View>
                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(mail) => this.setState({mail})}
                            value={this.state.mail}
                            keyboardType="email-address"
                            placeholder="Mail"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(num) => this.setState({num})}
                            value={this.state.num}
                            keyboardType="number-pad"
                            placeholder="Numéro de téléphone"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(numDom) => this.setState({numDom})}
                            value={this.state.numDom}
                            keyboardType="number-pad"
                            placeholder="Numéro domicile"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(numPro) => this.setState({numPro})}
                            value={this.state.numPro}
                            keyboardType="number-pad"
                            placeholder="Numéro professionnel"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(adresse) => this.setState({adresse})}
                            value={this.state.adresse}
                            placeholder="Adresse"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(cp) => this.setState({cp})}
                            value={this.state.cp}
                            keyboardType="number-pad"
                            placeholder="Code postal"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(ville) => this.setState({ville})}
                            value={this.state.ville}
                            placeholder="Ville"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(entreprise) => this.setState({entreprise})}
                            value={this.state.entreprise}
                            placeholder="Nom de l'entreprise"
                            autoCorrect={false}
                            placeholderTextColor={grey}
                        />
                    </View>
                </View>
            </ScrollView >
        );
    }

}

export default Profil;


