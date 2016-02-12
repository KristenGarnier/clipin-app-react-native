/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component, View, Text, TabBarIOS, StyleSheet} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';
import Routes from './routes';
import Profil from './profil';
import {green, black} from './colors';

const styles = StyleSheet.create({
    tabBar:{

    }
});


class Main extends Component {
    constructor(){
        super();

        this.state = {
            selectedTab: 'Profil'
        }
    }

    render() {
        return (
            <TabBarIOS tintColor={green} style={styles.tabBar}>
                <TabBarIOS.Item
                    title="Profil"
                    selected={this.state.selectedTab == 'Profil'}
                    icon={require('../img/profil-active.png')}
                    onPress={() => this.setState({selectedTab: 'Profil'})}
                >
                    <Profil />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Stats"
                    selected={this.state.selectedTab == 'Stats'}
                    onPress={() => this.setState({selectedTab: 'Stats'})}
                >

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Contacts"
                    selected={this.state.selectedTab == 'Contacts'}

                    onPress={() => this.setState({selectedTab: 'Contacts'})}
                >
                    <Text>HELLOO Stats</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Pramètres"
                    selected={this.state.selectedTab == 'Paramètres'}
                    onPress={() => this.setState({selectedTab: 'Paramètres'})}
                >
                    <Text>HELLOO Stats</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default Main;

