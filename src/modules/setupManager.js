const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    // Add new setup to database
    post(setup) {
        return fetch(`${url}Setups.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setup)
        }).then(e => e.json)
    },
    // Get Setups based on user id from database
    myTracks(userId) {
        return fetch(`${url}Setups.json?orderBy="userId"&equalTo="${userId}"&print=pretty`)
            .then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })
    },
    // Get setups from database
    getSetups() {
        return fetch(`${url}Setups.json?print=pretty`)
            .then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })
    },
    // Edit setups in database
    editSetup(setup) {
        return fetch(`${url}Setups/${setup.id}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setup)
        }).then(data => data.json());
    },
    // Delete setup from database
    deleteSetup(id) {
        return fetch(`${url}/Setups/${id}.json`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application.json'
            }
        })
            .then(e => e.json())
    }
}