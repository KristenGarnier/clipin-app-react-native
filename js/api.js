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
      .then(res => emitter.emit(constants.USER_UPDATED));
  });

  emitter.addListener(constants.ADD_USER, (data) => {
    fetch(dbUsers, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(_ => emitter.emit(constants.USER_ADDED))
  });

  emitter.addListener(constants.ADD_RELATION, ({id, idRelation}) => {
    fetch(`${dbUsers}/${id}/relations`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: idRelation})
    })
    .then(res => res.json())
    .then(_ => emitter.emit(constants.RELATION_ADDED))
  });

  emitter.addListener(constants.REMOVE_RELATION, ({id, idRelation}) => {
    fetch(`${dbUsers}/${id}/relations/${idRelation}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(_ => emitter.emit(constants.RELATION_DELETED))
  });

  emitter.addListener(constants.GET_USER, id => {
    fetch(`${dbUsers}/${id}`)
      .then(res => res.json())
      .then(res => {
        emitter.emit(constants.USER_GETTED, res)
      });
  });
}

