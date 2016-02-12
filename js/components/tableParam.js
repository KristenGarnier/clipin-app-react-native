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
} from 'react-native';

import Divider from './tableDivider';
import Row from './tableRow';

export default ({renders}) => {

    const rows = renders.map((item, i) => {
        if(renders.length - 1 === i) {
            return <Row key={i} name={item.name} content={item.content} />
        }
        return <View key={i}>
            <Row key={i} name={item.name} content={item.content} />
            <Divider />
        </View>
    });

    return (
        <View>
            {rows}
        </View>

    )
}


