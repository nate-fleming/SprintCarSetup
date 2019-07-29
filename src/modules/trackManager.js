const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    // Get all the tracks from the database
    getTracks() {
        return fetch(`${url}Tracks.json?print=pretty`).then(e => e.json())
    },
    // Get a track from the database by track id
    getOneTrack(id) {
        return fetch(`${url}Tracks.json?orderBy="id"&equalTo=${id}&print=pretty`)
            .then(e => e.json())
    }
}