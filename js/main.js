/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,
{
    Component,
    View,
    Text,
    TabBarIOS,
    StyleSheet,
    NavigatorIOS,
    StatusBarIOS,
} from 'react-native';

import Profil from './profil';
import Params from './params';
import Contacts from './contact';
import Stats from './stats';
import {green, black} from './colors';

const styles = StyleSheet.create({
});

StatusBarIOS.setStyle('light-content');


class Main extends Component {
    constructor(){
        super();

        this.state = {
            selectedTab: 'Profil'
        }
    }

    render() {
        return (
            <TabBarIOS tintColor={green} barTintColor={'#000'} >
                <TabBarIOS.Item
                    title="Profil"
                    selected={this.state.selectedTab == 'Profil'}
                    icon={require('../img/profil-min.png')}
                    onPress={() => this.setState({selectedTab: 'Profil'})}
                >
                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        initialRoute={{
                            title: 'Profil',
                            component: Profil
                        }}
                        barTintColor="black"
                        tintColor="white"
                        titleTextColor="white"
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Stats"
                    selected={this.state.selectedTab == 'Stats'}
                    icon={require('../img/stats-min.png')}
                    onPress={() => this.setState({selectedTab: 'Stats'})}
                >
                  <NavigatorIOS
                    style={{
                            flex: 1
                        }}
                    initialRoute={{
                            title: 'Statistiques',
                            component: Stats
                        }}
                    barTintColor="black"
                    tintColor="white"
                    titleTextColor="white"
                  />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('../img/logo.png')}
                />
                <TabBarIOS.Item
                    title="Contacts"
                    selected={this.state.selectedTab == 'Contacts'}
                    icon={require('../img/contact-min.png')}
                    onPress={() => this.setState({selectedTab: 'Contacts'})}
                >
                  <NavigatorIOS
                    style={{
                            flex: 1
                        }}
                    initialRoute={{
                            title: 'Contacts',
                            component: Contacts
                        }}
                    barTintColor="black"
                    tintColor="white"
                    titleTextColor="white"
                  />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Pramètres"
                    selected={this.state.selectedTab == 'Paramètres'}
                    icon={require('../img/settings-min.png')}
                    onPress={() => this.setState({selectedTab: 'Paramètres'})}
                >
                  <NavigatorIOS
                    style={{
                            flex: 1
                        }}
                    initialRoute={{
                            title: 'Réglages',
                            component: Params
                        }}
                    barTintColor="black"
                    tintColor="white"
                    titleTextColor="white"
                  />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default Main;

