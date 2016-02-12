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

import Home from './main';

import Button from 'apsl-react-native-button';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from './routes';

import {green} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: green,
        borderWidth: 0,
        borderRadius: 0,
        width: width / 2.5,
        marginRight: 20,
        marginTop: 40
    },
    backDrop: {
        flex: 1,
        flexDirection: 'column',
        width
    },
    input: {
        height: 40,
        borderBottomColor: 'white',
        borderBottomWidth: 4,
        color: 'white',
        width: width / 1.5,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
    },
    marginInput: {
        marginTop: 30
    },
    logo: {
        width: width / 1.5,
        height: 80,
        marginTop: height * 0.1
    },
    logoContainer: {
        alignItems: 'center'
    },
    groupInput: {
        marginTop: 50,
        alignItems: 'center'
    },
    arrow: {
        height: 20
    },
    oubli: {
        backgroundColor: 'transparent',
        color: green,
        marginTop: 60,
        marginRight: 20,
    },
    groupButtons: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    otherConnection: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40
    },
    socials: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    socialsIcons: {
        marginLeft: 20,
        marginRight: 20
    },
    socialsText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white'
    }
});

class Login extends Component {

    constructor() {
        super();

        this._handleNav = this._handleNav.bind(this);

        this.state = {
            login: '',
            password: '',
            logged: false
        }


    }


    render() {
        if (!this.state.logged) {
            return (
                <ScrollView style={styles.container}>
                    <Image source={require('../img/bg.jpg')} resizeMode="cover" style={styles.backDrop}>
                        <View>
                            <View style={styles.logoContainer}>
                                <Image source={require('../img/clip-blanc.png')} resizeMode="contain"
                                       style={styles.logo}/>
                            </View>
                            <View style={styles.groupInput}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(login) => this.setState({login})}
                                        value={this.state.login}
                                        placeholder="Login"
                                        autoCorrect={false}
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View style={[styles.inputContainer, styles.marginInput]}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(password) => this.setState({password})}
                                        value={this.state.password}
                                        placeholder="*****"
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        placeholderTextColor="white"
                                    />
                                </View>
                            </View>
                            <View style={styles.groupButtons}>
                                <Text style={styles.oubli}>
                                    Mot de passe oublié ?
                                </Text>
                                <View>
                                    <Button style={styles.button} textStyle={{fontSize: 18}} onPress={this._handleNav}>
                                        -->
                                    </Button>
                                </View>
                            </View>
                            <View style={styles.otherConnection}>
                                <Text style={styles.socialsText}>
                                    Ou se connecter à partir de
                                </Text>
                                <View style={styles.socials}>
                                    <Image style={styles.socialsIcons} source={require('../img/linkedin.png')}
                                           resizeMode="contain"/>
                                    <Image style={styles.socialsIcons} source={require('../img/google-plus.png')}
                                           resizeMode="contain"/>
                                </View>
                            </View>
                        </View>
                    </Image>
                </ScrollView>
            );
        } else {
            return (
                <Home />
            )
        }
    }

    _handleNav() {
        //const route = Routes.getPuckRoute();
        //this.props.navigator.push(route);

        this.setState({
            logged: true
        });
    }
}



export default Login;


