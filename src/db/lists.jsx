import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'lib/firebase/firebase';

const listsDB = collection(db, 'Lists');

export async function addList(values) {
  addDoc(listsDB, {
    name: values.name,
    color: values.color,
    sectionID: '7iBJJWRC3i1EcD3mmg6h',
  });
}

export async function getUserLists(sectionId = '7iBJJWRC3i1EcD3mmg6h') {
  try {
    const listsQuery = query(
      collection(db, 'Lists'),
      where('sectionID', '==', sectionId)
    );

    const querySnapshot = await getDocs(listsQuery);
    return querySnapshot.docs.map((doc) => {
      return doc.data();
    });
  } catch (error) {
    console.log(error);
  }
}
