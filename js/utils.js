import {orange, red, green} from './colors';

// ObjectToArray : Object -> Array
// Convert and object to an array, if the key is a string, it saves it in an 'id' property
export function objectToArray(obj) {
    let innerObj;
    return Object.keys(obj).map(key => {
        if (!Number.isInteger(key)) {
            innerObj = obj[key];
            return Object.assign({id: key}, innerObj);
        } else {
            return obj[key];
        }
    });
}

// fetchUser : Object -> String -> Promise
// Fetch one user from the db
export function fetchUser(user, url) {
    return fetch(`${url}/${user}.json`)
        .then(res => res.json());
}

// selectColor : String -> String
// send back a color for a given length
export function selectColor(ChainLenght){
    switch(ChainLenght){
        case 1:
            return red;
            break;
        case 2:
            return orange;
            break;
        case 3:
            return green;
            break;
        default:
            return 'transparent';
    }
}