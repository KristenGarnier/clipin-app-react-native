import _ from "underscore";
import {updateUser as updateUserApi, init} from './api';
init();
import {EventEmitter} from 'fbemitter';
import constants from './constants';

const EventStateManager = new EventEmitter();


class StateManager extends EventEmitter {
  constructor () {
    super();
    this.state = {};
  }

  setUser (newState) {
    this.state = newState;
  }

  getUser () {
    return this.state;
  }

  getRelation() {
    return this.state.relations;
  }

  get10highest() {
    return _.sortBy(this.state.relations, 'compatibilite')
      .reverse()
      .slice(0, 9);
  }

  getLastClip() {
    return _.sortBy(this.state.relations, 'date')
      .reverse()[ 0 ];
  }

  updateUser(user){
    this.setState(user);
    this.emit(constants.UPDATE_USER, user);
  }
}

const StateManagerInitialize = new StateManager();

EventStateManager.addListener(constants.USER_GETTED, user => {
  StateManagerInitialize.setState(user);
});

export default StateManagerInitialize;

//export function setState (newState) {
//  state = newState;
//}
//
//export function getUser () {
//  return state;
//}
//
//export function getRelation () {
//  return state.relations;
//}
//
//export function get10highest () {
//  return _.sortBy(state.relations, 'compatibilite')
//    .reverse()
//    .slice(0, 9);
//}
//
//export function getLastClip () {
//  return _.sortBy(state.relations, 'date')
//    .reverse()[ 0 ];
//}
//
//export function updateUser (user) {
//  setState(user);
//  console.log('updateUser');
//  updateUserApi(user);
//}

