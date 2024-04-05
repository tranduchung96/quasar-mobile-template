import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDfZQPZoaIU263jBDMGBFim7o4lWuMNtAQ',
  authDomain: 'quasar-mobile-template.firebaseapp.com',
  projectId: 'quasar-mobile-template',
  storageBucket: 'quasar-mobile-template.appspot.com',
  messagingSenderId: '369233269964',
  appId: '1:369233269964:web:b0cc193eae698d82801e69',
  measurementId: 'G-RWXPF2DNWR'
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, db };
