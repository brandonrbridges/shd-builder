import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAv_nG3EGO75c-HeuKpJHbwSpFnMPphPik',
  authDomain: 'shd-builder.firebaseapp.com',
  projectId: 'shd-builder',
  storageBucket: 'shd-builder.appspot.com',
  messagingSenderId: '553923877721',
  appId: '1:553923877721:web:7fdbd70861f27425bbca48',
  measurementId: 'G-F0QW980S9B',
}

const app = initializeApp(config)

export const authentication = getAuth(app)
export const database = getFirestore(app)
