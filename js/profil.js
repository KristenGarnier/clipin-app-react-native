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
    Image,
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';


import ExNavigator from '@exponent/react-native-navigator';
import Routes from './routes';
import Divider from './components/tableDivider';
import Row from './components/tableRow';
import Table from './components/tableParam';

const advanced = [
    {
        name : 'Hobbies',
        content : 'future toggle'
    },
    {
        name : 'Formation',
        content : 'future toggle'
    },
    {
        name : 'Expérience',
        content : 'future toggle'
    },
    {
        name : 'Compétences',
        content : 'future toggle'
    },
    {
        name : 'Préférences',
        content : 'future toggle'
    },
    {
        name : 'Permis',
        content : 'future toggle'
    },
    {
        name : 'Salaire minimum',
        content : 'future toggle'
    }
];

const general = [
    {
        name : 'Numéro de téléphone',
        content : 'future toggle'
    },
    {
        name : 'Nom & prénom',
        content : 'future toggle'
    },
    {
        name : 'Âge',
        content : 'future toggle'
    },
    {
        name : 'Adresse',
        content : 'future toggle'
    },
    {
        name : 'Mail',
        content : 'future toggle'
    },
    {
        name : 'Profession',
        content : 'future toggle'
    }
];

const criteria = [
    {
        name : 'Je suis',
        content : 'Ouvert(e) aux opportunités'
    },
    {
        name : 'Je recherche',
        content : 'Un emploi'
    }
];

class Profil extends Component {

    constructor() {
        super();

        this._handlePress = this._handlePress.bind(this);

        this.state = {
            avanced: false
        }


    }

    _renderTable() {
        if(this.state.avanced) return <Table  renders={advanced}/>;

        return <Table  renders={general}/>
    }


    render() {
        return (
            <ScrollView  style={styles.mainContainer}>
                <Image source={require('../img/bureau.jpg')} resizeMode="cover" style={styles.imgContainer}>
                    <Image source={require('../img/avatar-f.jpg')} resizeMode="contain" style={styles.imgUser}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.textName}>Valérie dupont</Text>
                        <View style={styles.infosContainer}>
                            <Text style={styles.textInfos}>34 ans</Text>
                            <Text style={styles.textInfos}>Coiffeuse</Text>
                            <Text style={styles.textInfos}>Jo coiffure</Text>
                        </View>

                        <View style={styles.modificationContainer}>
                            <Text style={[styles.textInfos, styles.greenColor]}>Modifier</Text>
                        </View>

                    </View>
                </Image>
                <View style={styles.tableContainer}>
                    <View>
                        <View style={styles.tableSection}>
                            <Text style={styles.tableSectionText}>Mes Critères</Text>
                        </View>
                        <Table renders={criteria}/>
                        <View style={styles.tableSectionContainer}>
                            <View style={[styles.tableSection, this.state.avanced ? {} : {backgroundColor: '#323232'}]} >
                                <Text style={[styles.tableSectionText, styles.centerText]} onPress={() => {
                                this._handlePress('general');
                                }}>Paramètres généraux</Text>
                            </View>
                            <View style={[styles.tableSection, this.state.avanced ? {backgroundColor: '#323232'} : {} ]} >
                                <Text style={[styles.tableSectionText, styles.centerText]} onPress={this._handlePress}>Avancés</Text>
                            </View>
                        </View>
                        {this._renderTable()}
                    </View>

                </View>
            </ScrollView >
        );
    }

    _handlePress(param){
        if(param === 'general' && !this.state.avanced){
           return;
        } else if(param !== 'general' && this.state.avanced){
            return;
        }
        this.setState({
            avanced: !this.state.avanced
        })
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const green = '#a6ce39';
const grey = '#9D9D9D';

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
    tableInfoContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    tableInfoLeftText: {
        fontWeight: 'bold'
    },
    tableInfoRightText: {
        fontWeight: '100',
        color: grey
    },
    tableElementDivider: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: grey,
        borderBottomWidth: 1,
        opacity: 0.3
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

export default Profil;

