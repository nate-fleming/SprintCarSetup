import * as firebase from 'firebase/app'
import 'firebase/auth'



const setUserInLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user.user.uid));
}

export default {
    getUserFromLocalStorage() {
        const user = localStorage.getItem('user');

        if (!user) return null;

        return JSON.parse(user);
    },
    registerUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(newUser => {
                setUserInLocalStorage(newUser)
                return newUser
            })
    },

    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                setUserInLocalStorage(user)
                return user
            })
    },

    logout() {
        localStorage.removeItem('user')
        this.props.history.push('/sign-in')
    }

}