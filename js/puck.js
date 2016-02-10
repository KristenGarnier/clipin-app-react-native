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
    ListView
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
        this.request = fetch(dbUsers)
            .then(res => res.json());

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            users: this.ds.cloneWithRows([])
        }


    }

    componentDidMount() {
        this.request
            .then(res => {
                this.setState({
                    users: this.ds.cloneWithRows(objectToArray(res))
                });

            })
            .catch(error => console.error(error));
    }

    render() {

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.users}
                    renderRow={(user) =>
                        <View style={styles.row}>
                            <Text style={styles.item}>{user.infos.nom}</Text>
                        </View>
                    }
                />
            </View>
        );
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
    row: {
        flex: 1,
        flexDirection: 'row',
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    item: {
        flex:1,
        textAlign: 'center'
    }
});

export default clipin;


