// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { authentication, database } from '../firebase'

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'

export const addFirebaseDoc = async (col: string, data: object, id?: string) => {
  let document = null

  if (id) {
    document = await setDoc(doc(database, col, id), {
      ...data,
      id: id,
      created_at: serverTimestamp(),
    })
  } else {
    document = await addDoc(collection(database, col), data)

    document = await updateFirebaseDoc(col, document.id, {
      id: document.id,
      created_at: serverTimestamp(),
    })
  }

  return document
}

export const createUser = async (email: string, password: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(async (response) => {
        const data = {
          email: email,
          password: password,
          id: response.user.uid,
        }

        await addFirebaseDoc('users', data, data.id)

        return resolve(data)
      })
      .catch((error) => reject(error))
  })
}

export const getFirebaseDoc = async (col: string, id: string) => {
  const reference = doc(database, col, id)

  const data = await getDoc(reference)

  if (data.exists()) {
    return data.data()
  } else {
    return null
  }
}

export const getFirebaseDocs = async (col: string) => {
  const q = query(collection(database, col))

  const data = await getDocs(q)

  const array: Array<any> = []

  data.docs.map((snapshot) => {
    if (snapshot.exists()) {
      return array.push(snapshot.data())
    } else {
      return null
    }
  })

  if (array.length > 0) {
    return array
  } else {
    return null
  }
}

export const updateFirebaseDoc = async (col: string, id: string, data: object) => {
  const reference = doc(database, col, id)
  const item = await getDoc(reference)

  let update = null

  if (item.exists()) {
    update = await updateDoc(reference, { ...data, updated_at: serverTimestamp() })
  } else {
    update = await setDoc(reference, { ...data, created_at: serverTimestamp() })
  }

  return update
}
