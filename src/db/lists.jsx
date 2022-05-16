import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
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
