import keys from '../keys'

const weatherKey = keys.darkSkyKey

export default {
    // getWeather(latitude, longitude, time) {
    //     return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude},${time}`)
    //         .then(e => e.json())
    // },
    getWeather(latitude, longitude, time) {
        return fetch(`https://us-central1-drak-sky-call.cloudfunctions.net/darkSky?weatherKey=${weatherKey}&latitude=${latitude}&longitude=${longitude}&time=${time}`)
            .then(e => e.json())
    }
}