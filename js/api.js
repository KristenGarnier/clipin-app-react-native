const dbUsers = 'http://127.0.0.1:8000/api/users';

export const getUsers = fetch(dbUsers)
    .then(res => res.json());

export const addUser = fetch(dbUsers, {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        password: "sadazazeezee69",
        username: "lolaazeegzfazfeazeie",
        email: "test@azeRfgegraelol.fo",
        prenom: "kaazaeka",
        nom: "salade",
        uuid: "JDZ323443RHE8"
    })
});
