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
    Dimensions,
    ScrollView
} from 'react-native';

import {green} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {},
    imgContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        alignItems: 'center',
        height: height * 0.3,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: width * 0.1
    },
    imgUser: {
        height: width / 4,
        borderRadius: width / 8,
        width: width / 4,
        marginLeft: width * 0.05
    },
    textName: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    infosContainer: {
        marginTop: 20
    },
    textInfos: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    tableContainer: {
        borderTopColor: green,
        borderTopWidth: 3,
        flex:1,
        flexDirection: 'column'
    },
    modificationContainer: {
        marginTop: 20
    },
    greenColor: {
        color: green
    },
    tableSection: {
        flex: 1,
        backgroundColor: '#1B1B1B',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10
    },
    tableSectionText: {
        color: 'white',
        fontWeight: '500'
    },
    tableSectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    centerText: {
        textAlign: 'center'
    }
});

class Profil extends Component {

    constructor() {
        super();

    }


    render() {
        return (
            <ScrollView  style={styles.mainContainer}>
                <Text>HI MATE !</Text>
            </ScrollView >
        );
    }

}

export default Profil;


