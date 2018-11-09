const SERVER_URL = 'http://192.168.1.13:5000'

export function fetchGraphQL(query) {
    return fetch(`${SERVER_URL}/graphql?`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    })
    .then(async res => await res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((error) => { console.error(error)});
}