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

const dbUsers = 'http://127.0.0.1:8000/api/users';

class clipin extends Component {

    constructor() {
        super();
        this.request = fetch(dbUsers)
            .then(res => res.json());

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            users: ds.cloneWithRows([])
        }


    }

    componentDidMount() {
        this.request
            .then(res => {
                this.setState({
                    users: this.state.users.cloneWithRows(res)
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
                            <Text style={styles.item}>{user.nom}</Text>
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
        flexDirection: 'column',
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
        justifyContent: 'center',
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 2,
        marginTop: 5,
        borderColor: 'grey'
    },
    item: {
        flex:1,
        textAlign: 'center'
    }
});

export default clipin;


