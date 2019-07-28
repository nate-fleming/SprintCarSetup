import * as firebase from 'firebase/app'
import 'firebase/auth'



const setUserInLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user.user.uid));
}

export default {
    // Get user information from local storage
    getUserFromLocalStorage() {
        const user = localStorage.getItem('user');

        if (!user) return null;

        return JSON.parse(user);
    },
    // Register new user
    registerUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(newUser => {
                setUserInLocalStorage(newUser)
                return newUser
            })
    },
    // Check login with firebase
    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                setUserInLocalStorage(user)
                return user
            })
    },
    // Ramove user from local storage on logout
    logout() {
        localStorage.removeItem('user')
        this.props.history.push('/sign-in')
    }

}