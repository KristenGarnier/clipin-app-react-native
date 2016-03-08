const dbUsers = 'http://127.0.0.1:8000/api/users';
import _ from "underscore";
import constants from './constants'
import emitter from './Emitter';


export function init() {
  emitter.addListener(constants.UPDATE_USER, user => {
    fetch(`${dbUsers}/${user.id}`,{
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(user)
    })
      .then(res => console.log(res));
  });

  emitter.addListener(constants.ADD_USER, (data) => {
    fetch(dbUsers, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
  });

  emitter.addListener(constants.ADD_RELATION, ({id, idRelation}) => {
    fetch(`${dbUsers}/${id}/relations`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: idRelation})
    })
  });

  emitter.addListener(constants.REMOVE_RELATION, ({id, idRelation}) => {
    fetch(`${dbUsers}/${id}/relations/${idRelation}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  });

  emitter.addListener(constants.GET_USER, id => {
    fetch(`${dbUsers}/${id}`)
      .then(res => res.json())
      .then(res => emitter.emit(constants.USER_GETTED, res));
  });
}

//export const getUsers = fetch(dbUsers)
//    .then(res => res.json());

export function getRelations(id) {
  return fetch(`${dbUsers}/${id}/relations`)
};

export function getUser(id) {
  return fetch(`${dbUsers}/${id}`)
};

export function getRelation(id, idRelation) {
  return fetch(`${dbUsers}/${id}/relations/${idRelation}`);
};

export function addUser(data) {
  return fetch(dbUsers, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  })
};

export function addRelation(id, idRelation) {
  return fetch(`${dbUsers}/${id}/relations`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({user: idRelation})
  })
};

export function removeRelation(id, idRelation) {
  return fetch(`${dbUsers}/${id}/relations/${idRelation}`, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
};

export const updateUser = _.debounce((user) => {
  fetch(`${dbUsers}/${user.id}`,{
    method: 'PATCH',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(user)
  })
    .then(res => console.log(res));
}, 1000);

