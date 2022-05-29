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

export async function addList(values, sectionId) {
  addDoc(listsDB, {
    name: values.name,
    color: values.color,
    sectionID: sectionId,
  });
}

export async function getUserLists(sectionId) {
  try {
    const listsQuery = query(
      collection(db, 'Lists'),
      where('sectionID', '==', sectionId)
    );

    const querySnapshot = await getDocs(listsQuery);
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        sectionID: doc.data().sectionID,
        name: doc.data().name,
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
