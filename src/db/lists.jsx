import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from 'lib/firebase/firebase';

const listsDB = collection(db, 'Lists');

export async function addList(values, userID) {
  addDoc(listsDB, {
    userID: userID,
    name: values.name,
    tag: 'tag',
    color: values.color,
  });
}

export async function getUserLists(userID) {
  try {
    const listsQuery = query(
      collection(db, 'Lists'),
      where('userID', '==', userID)
    );

    const querySnapshot = await getDocs(listsQuery);
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        userID: userID,
        name: doc.data().name,
        tag: 'tag',
        color: doc.data().color,
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function removeListFromDb(idList) {
  try {
    const taskQuery = query(
      collection(db, 'Tasks'),
      where('listID', '==', idList)
    );

    const taskSnapshot = await getDocs(taskQuery);

    try {
      taskSnapshot.docs.map(async (taskDoc) => {
        await deleteDoc(doc(db, 'Tasks', taskDoc.id));
      });

      await deleteDoc(doc(db, 'Lists', idList));
    } catch (e) {
      console.log(e);
    }
  } catch (error) {
    console.log(error);
  }
}
