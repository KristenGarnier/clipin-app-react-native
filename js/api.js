const dbUsers = 'http://127.0.0.1:8000/api/users';

export const getUsers = fetch(dbUsers)
    .then(res => res.json());

export function getRelations(id) {
  return fetch(`${dbUsers}/${id}/relations`)
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
