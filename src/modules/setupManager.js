const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    post(setup) {
        return fetch(`${url}/Setups.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setup)
        }).then(e => e.json)
    }
}