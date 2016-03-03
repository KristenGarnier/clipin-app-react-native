import _ from "underscore";

let state;

export function setState(newState){
  state = newState;
}

export function getUser(){
  return state;
}

export function getRelation(){
  return state.relations;
}

export function get10highest(){
  return _.sortBy(state.relations, 'compatibilite')
    .reverse()
    .slice(0, 9);
}

export function getLastClip(){
  return _.sortBy(state.relations, 'date')
    .reverse()[0];
}

