/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Button from 'apsl-react-native-button';
import {objectToArray, fetchUser} from './utils';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from './routes';

const dbUsers = 'https://clipin.firebaseio.com/users.json';
const dbUsersRequest = 'https://clipin.firebaseio.com/users';
const dbBase = 'https://clipin.firebaseio.com';

class clipin extends Component {

    constructor() {
        super();

        this._handlePress = this._handlePress.bind(this);

        this.request = fetch(dbUsers)
            .then(res => res.json());

        this.state = {
            users: []
        }


    }

    componentDidMount() {
        this.request
            .then(res => {
                this.setState({
                    users: objectToArray(res)
                });

            })
            .catch(error => console.error(error));
    }

    render() {

        const users = this.state.users.map((item, i) => {
            return <Text key={i} style={styles.instructions}>
                {item.infos.nom} {item.infos.prenom}
            </Text>;
        });

        return (
            <View style={styles.container}>
                {users}
                <Button style={{backgroundColor: 'transparent'}} textStyle={{fontSize: 18}} onPress={this._handlePress}>
                    Add infos in db
                </Button>
            </View>
        );
    }

    _handlePress() {
        fetch(dbUsers, {
            method: 'POST',
            body: JSON.stringify({
                UUID: 'ZERTH4REF',
                totalRencontres: 2,
                infos: {
                    nom: 'Montelimard',
                    prenom: 'Benjamin',
                    socials: {
                        facebook: 'https://facebook.com'
                    }
                },
                relations: [
                    {
                        UUID: '12343FZE33',
                        compatibilite: 60,
                        date: '12-01-16',
                        nom: 'Vialaneix',
                        prenom: 'Juliette'
                    }
                ]
            })
        })
            .then(res => res.json())
            .then(res => {
                fetchUser(res.name, dbUsersRequest)
                    .then(res => {
                        this.setState({
                            users: [
                                ...this.state.users,
                                res
                            ]
                        });
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(res));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default clipin;


