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

class clipin extends Component {

    constructor() {
        super();
        this.request = fetch('https://clipin.firebaseio.com/users.json')
            .then(res => res.json());

        this.state = {
            users : []
        }
    }

    componentDidMount(){
        this.request
            .then(res =>{
                this.setState({
                    users: res.filter(item => item !== null)
                });
                console.log(this.state.users);
            })
            .catch(error => console.error(error));
    }

    render() {
        const users = this.state.users.map((item, i) => {
            console.log(item);
            return <Text key={i} style={styles.instructions} >
                {item.infos.nom} {item.infos.prenom}
            </Text>;
        });
        return (
            <View style={styles.container}>
                {users}
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
});

export default clipin;

