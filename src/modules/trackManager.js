const url = 'https://sprintcarsetup-7a299.firebaseio.com/'

export default {
    getTracks() {
        return fetch(`${url}/Tracks.json?print=pretty`).then(e => e.json())
    },
}