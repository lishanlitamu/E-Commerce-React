// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection
} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRScMgh8MERBsSlkrk8lGaZwHdDadWh-k",
  authDomain: "e-commerce-e7068.firebaseapp.com",
  projectId: "e-commerce-e7068",
  storageBucket: "e-commerce-e7068.appspot.com",
  messagingSenderId: "133939913194",
  appId: "1:133939913194:web:8818ac0f70bd0e1902d293"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dbase = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(dbase, 'users', userAuth.uid); //users is the collection
    console.log(userDocRef); // google creates an object to store user/uid and store more data
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    // check if user data exists

    // if user doesn't exist
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user ', error.message);
        }
    }

    // if user data exists

    return userDocRef;

    // create or set the document with the data from userAuth in my collection

    // return userDocRef

}