/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {grey} from '../colors';

const styles = StyleSheet.create({
    tableInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center'
    },
    tableInfoLeftText: {
        fontWeight: 'bold'
    },
    tableInfoRightText: {
        fontWeight: '100',
        color: grey
    },
});

export default ({name, content}) => {
    return (
        <View style={styles.tableInfoContainer}>
            <View>
                <Text style={styles.tableInfoLeftText}>{name}</Text>
            </View>
            { typeof content !== 'string' ?
                <View>
                    {content}
                </View>
                :
                <View>
                    <Text style={styles.tableInfoRightText}>{content}</Text>
                </View>
            }
        </View>
    )
}



