import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCXTohJT5ROVmCEtOIluWTyTH3QzoAgMzg',
	authDomain: 'proyectofinal-97639.firebaseapp.com',
	projectId: 'proyectofinal-97639',
	storageBucket: 'proyectofinal-97639.appspot.com',
	messagingSenderId: '133125159486',
	appId: '1:133125159486:web:f2d8207f19b4036f9d6f6f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
