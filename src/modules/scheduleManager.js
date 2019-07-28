const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    // Add new race to database
    post(race) {
        return fetch(`${url}Schedule.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(race)
        }).then(e => e.json)
    },
    // Get future races for schedule from database
    getSchedule(userId) {
        return fetch(`${url}Schedule.json?orderBy="userId"&equalTo="${userId}"&print=pretty`)
            .then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })
    },
    // Delete race from database
    deleteRace(id) {
        return fetch(`${url}/Schedule/${id}.json`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application.json'
            }
        })
            .then(e => e.json())
    },
    // Replace race in database with edits
    editRace(race) {
        return fetch(`${url}Schedule/${race.id}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(race)
        }).then(data => data.json());
    }

}