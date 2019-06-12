const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    post(race) {
        return fetch(`${url}Schedule.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(race)
        }).then(e => e.json)
    },
    getSchedule() {
        return fetch(`${url}Schedule.json?print=pretty`)
            .then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })
    }

}