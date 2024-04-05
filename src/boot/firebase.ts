import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { VueFire, VueFireAuth, VueFireAppCheck,  } from 'vuefire'
import { boot } from 'quasar/wrappers';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, db };


export default boot(({ app }) => {

  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ]
  });
});
