import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmxD0kmRK1ixOttgpiha1nipkA-L78P2A",
    authDomain: "catch-of-the-day-c6329.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-c6329.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base;