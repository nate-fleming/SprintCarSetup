import keys from '../keys'

const weatherKey = keys.darkSkyKey

export default {
    // Send track infor to Firebase cloud funtion to fetch weather information from Dark Sky
    getWeather(latitude, longitude, time) {
        return fetch(`https://us-central1-drak-sky-call.cloudfunctions.net/darkSky?weatherKey=${weatherKey}&latitude=${latitude}&longitude=${longitude}&time=${time}`)
            .then(e => e.json())
    }
}