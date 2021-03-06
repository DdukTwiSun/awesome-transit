import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCtQBNY7PW4c75_q5PA03wawbZgziS9w4s',
  authDomain: 'awesome-transit-ea77a.firebaseapp.com',
  databaseURL: 'https://awesome-transit-ea77a.firebaseio.com',
  projectId: 'awesome-transit-ea77a',
  storageBucket: 'awesome-transit-ea77a.appspot.com',
  messagingSenderId: '115411880768'
}

firebase.initializeApp(config)
export const db = firebase.database()

export const notiEnterRef = db.ref('noti_enter')
export const notiLeaveRef = db.ref('noti_leave')

export const userRef = db.ref('user')
