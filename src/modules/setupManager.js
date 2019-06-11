const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    post(setup) {
        return fetch(`${url}Setups.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setup)
        }).then(e => e.json)
    },
    myTracks(userId) {
        return fetch(`${url}Setups.json?orderBy="userId"&equalTo="${userId}"&print=pretty`)
            .then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })
    }
}