import React, {Text} from 'react-native';
import Swtich from './components/switch'
import {green} from './colors';

export const advanced = [
    {
        name : 'Hobbies',
        content : <Swtich />
    },
    {
        name : 'Formation',
        content : <Swtich />
    },
    {
        name : 'Expérience',
        content : <Swtich />
    },
    {
        name : 'Compétences',
        content : <Swtich />
    },
    {
        name : 'Préférences',
        content : <Swtich />
    },
    {
        name : 'Permis',
        content : <Swtich />
    },
    {
        name : 'Salaire minimum',
        content : <Swtich />
    }
];

 export const general = [
    {
        name : 'Numéro de téléphone',
        content : <Swtich />
    },
    {
        name : 'Nom & prénom',
        content : <Swtich />
    },
    {
        name : 'Âge',
        content : <Swtich />
    },
    {
        name : 'Adresse',
        content : <Swtich />
    },
    {
        name : 'Mail',
        content : <Swtich />
    },
    {
        name : 'Profession',
        content : <Swtich />
    }
];

export const criteria = [
    {
        name : 'Je suis',
        content : 'Ouvert(e) aux opportunités'
    },
    {
        name : 'Je recherche',
        content : 'Un emploi'
    }
];

export const confidential = [
  {
    name: 'Accepter les notifications push',
    content: <Swtich />
  },
  {
    name: 'Votre mot de passe',
    content: <Text style={{color: green, paddingRight: 10}}>Modifier</Text>
  }
];

export const sociaux = [
  {
    name: 'Linkedin',
    content: <Swtich />
  },
  {
    name: 'Google +',
    content: <Swtich />
  }
];