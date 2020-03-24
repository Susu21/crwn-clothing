import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFiZvF0kYo4tjvE90mv2Lfj0IpynRo5cU",
  authDomain: "crwn-clothing-ce78b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ce78b.firebaseio.com",
  projectId: "crwn-clothing-ce78b",
  storageBucket: "crwn-clothing-ce78b.appspot.com",
  messagingSenderId: "464413828632",
  appId: "1:464413828632:web:1dea5b73a6ec379896856d",
  measurementId: "G-8NJGQF3YF0"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
