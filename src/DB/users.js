import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

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

  console.log();
  return userName;
}

export async function changeUserName(userName, email) {
  const userQuery = query(collection(db, 'Users'), where('email', '==', email));

  const querySnapshot = await getDocs(userQuery);

  let userID;

  querySnapshot.forEach((doc) => {
    userID = doc.id;
  });

  const userRef = doc(db, 'Users', userID);

  await updateDoc(userRef, {
    name: userName,
  });
}
