/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    View,
} from 'react-native';

const grey = '#9D9D9D';

const styles = StyleSheet.create({
    tableElementDivider: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: grey,
        borderBottomWidth: 1,
        opacity: 0.3
    },
});

export default () => {
    return (
        <View style={styles.tableElementDivider}/>
    )
}



