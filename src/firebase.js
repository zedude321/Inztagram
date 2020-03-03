import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
     apiKey: "AIzaSyCA1g8FXxn8fV4XlCKScv7dVExgX6oRnfg",
     authDomain: "zinztagram.firebaseapp.com",
     databaseURL: "https://zinztagram.firebaseio.com",
     projectId: "zinztagram",
     storageBucket: "zinztagram.appspot.com",
     messagingSenderId: "342020121016",
     appId: "1:342020121016:web:b467913c16db0d8a2e2f4d",
     measurementId: "G-8SC4Z89RN1"
};

firebase.initializeApp(config);

export default firebase.firestore();