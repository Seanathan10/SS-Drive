import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
}

const SS_Drive_APP = firebase.initializeApp( FirebaseConfig );

export const Authentication = SS_Drive_APP.auth()

export default SS_Drive_APP;