import { db } from 'lib/firebase/firebase';

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

const usersDB = collection(db, 'Users');

export async function addUsers(userName, email) {
  await addDoc(usersDB, {
    name: userName,
    email: email,
    image: '',
    color: '#197A83',
  });
}

export async function getUser(email) {
  console.log(email);
  const userQuery = query(collection(db, 'Users'), where('email', '==', email));

  const querySnapshot = await getDocs(userQuery);

  let user;

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    user = doc.data();
  });

  return user;
}

export async function changeProfile(user, email) {
  const userQuery = query(collection(db, 'Users'), where('email', '==', email));

  const querySnapshot = await getDocs(userQuery);

  let userID;

  querySnapshot.forEach((doc) => {
    userID = doc.id;
  });

  const userRef = doc(db, 'Users', userID);

  await updateDoc(userRef, {
    name: user.name,
    image: user.image,
    color: user.color,
  });
}
