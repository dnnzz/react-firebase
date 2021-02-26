import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDfyEmQpGZPrdYqZnGbzio-AoAzRGKQ8Yc",
    authDomain: "react-firebase-2ca72.firebaseapp.com",
    projectId: "react-firebase-2ca72",
    storageBucket: "react-firebase-2ca72.appspot.com",
    messagingSenderId: "455781292036",
    appId: "1:455781292036:web:25bbb00edffbaf9927fd51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
  
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (user,additionalData) => {
  if(!user) return;
  // get reference ..
  const userRef = firestore.doc(`users/${user.uid}`);

  // fetch userRef 
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName,email,photoURL} = user;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    }catch(error){
      console.error(error); 
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) =>{
  if(!uid) return null;
  try{
    return firestore.collection("users").doc(uid);
  }catch(error){
    console.error(error);
  }
}


export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

  export default firebase;