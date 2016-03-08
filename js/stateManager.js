import _ from "underscore";
import {updateUser as updateUserApi, init} from './api';
init();
import emitter from './Emitter';
import constants from './constants';

class StateManager {
  constructor () {
    this.state = {};

    this.emitUpdate = _.debounce((user) => {
      emitter.emit(constants.UPDATE_USER, user);
    }, 1000);
  }

  setUser (newState) {
    this.state = newState;
  }

  getUser () {
    return this.state;
  }

  getRelation () {
    return this.state.relations;
  }

  get10highest () {
    return _.sortBy(this.state.relations, 'compatibilite')
      .reverse()
      .slice(0, 9);
  }

  getLastClip () {
    return _.sortBy(this.state.relations, 'date')
      .reverse()[ 0 ];
  }

  addRelation (user) {
    emitter.emit(constants.ADD_RELATION, { idRelation: user.id, id: this.state.id });
    this.state.relations = [
      ...this.state.relations,
      user
    ]
  }

  removeRelation (user) {
    emitter.emit(constants.REMOVE_RELATION, { idRelation: user.id, id: this.state.id });
    this.state.relations = this.state.relations.filter(relation => {
      return relation.id !== user.id;
    });
  }

  updateUser (user) {
    this.setUser(user);
    this.emitUpdate(user);
  }
}

const StateManagerInitialize = new StateManager();

emitter.addListener(constants.USER_GETTED, user => {
  StateManagerInitialize.setUser(user);
});

export default StateManagerInitialize;
