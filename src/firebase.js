import "firebase/auth";
import firebase from 'firebase/app'
// import { firestore } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxJTAYq5x5LEwoNEHfteNRAN1VSlt-m3k",
    authDomain: "m-tabibu.firebaseapp.com",
    projectId: "m-tabibu",
    storageBucket: "m-tabibu.appspot.com",
    messagingSenderId: "176751703419",
    appId: "1:176751703419:web:b0137f93ecf9f46cfc79de",
    measurementId: "G-ZJTKBTE33W"
  };
  firebase.initializeApp(firebaseConfig)
 export const auth = firebase.auth();
/* export const firestore = firebase.firestore();
 export const generateUserDocument = async (user, additionalData) => {
   if(!user)return
   const userRef =firestore.doc('user/${user.uid}')
   const snapshot =await userRef.get();
   if(!snapshot.exists){
const {email,displayName,photoURL} = user;
try{
await userRef.set({
  displayName,
  email,
  photoURL,
  ...additionalData
})
}catch(error){
console.error("Error creating user Document", error);
}
}
return getUserDocument(user.uid);
 }
 const getUserDocument = async uid =>{
   if(!uid) return null;
  try{
    const userDocument = await firestore.doc('user/${user.uid}').get();
    return{
      uid,
      ...userDocument
    };
    }catch(error){
    console.error("Error Fetching user", error);
    }*/
  
 export default firebaseConfig;