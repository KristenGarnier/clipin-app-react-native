/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';
import Routes from './routes';

class Main extends Component {
    render() {
        return (
            <ExNavigator
                initialRoute={Routes.getHomeRoute()}
                style={{ flex: 1 }}
                sceneStyle={{ paddingTop: 64 }}
            />
        );
    }
}

export default Main;

