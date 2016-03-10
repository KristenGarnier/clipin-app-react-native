import React, {Text} from 'react-native';
import Swtich from './components/switch'
import {green} from './colors';

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