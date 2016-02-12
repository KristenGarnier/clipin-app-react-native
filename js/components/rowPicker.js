/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    StyleSheet,
    Text,
    View,
    Picker,
    Component,
    Dimensions
} from 'react-native';

import {grey} from '../colors';
import FMPicker from 'react-native-fm-picker';
const width = Dimensions.get('window').width;

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
        width: width * 0.4,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: grey,
    },
    picker: {
        paddingBottom: 10,
    }
});

export default class RowPicker extends Component {
    render() {
        return (
            <View style={styles.tableInfoContainer}>
                <View>
                    <Text style={styles.tableInfoLeftText}>{this.props.name}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text
                        style={styles.picker}
                        onPress={()=>{
                        this.refs.picker.show();
                    }}>
                        {this.props.selected}
                    </Text>
                    <FMPicker ref={'picker'} options={this.props.options}
                              onSubmit={(option) => this.props.submit(option)}
                    />
                </View>
            </View >
        )
    }
}

