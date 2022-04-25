import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const usersDB = collection(db, 'Users');
export function addUsers(userName, email) {
	addDoc(usersDB, {
		name: userName,
		email: email,
	});
}

export async function getUserName(email) {
	const userQuery = query(collection(db, 'Users'), where('email', '==', email));

	const querySnapshot = await getDocs(userQuery);

	let userName = '';

	querySnapshot.forEach((doc) => {
		userName = doc.data().name;
	});

	return userName;
}
