import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAcqzsqI9_s6cwtF8-LsS_mV4qYkW_2_B8",
  authDomain: "crwn-clothing-ztm-db.firebaseapp.com",
  projectId: "crwn-clothing-ztm-db",
  storageBucket: "crwn-clothing-ztm-db.appspot.com",
  messagingSenderId: "80553687187",
  appId: "1:80553687187:web:8329ee15c7f3d713f7b566",
  measurementId: "G-V9XEFBPW3W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;