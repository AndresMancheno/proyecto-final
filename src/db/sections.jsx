import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'lib/firebase/firebase';

const sectionsDB = collection(db, 'Sections');

export async function addSection(values, email) {
  addDoc(sectionsDB, {
    name: values.name,
    color: values.color,
    usersID: email,
  });
}

export async function getUserSections(email) {
  try {
    const sectionQuery = query(
      collection(db, 'Sections'),
      where('usersID', '==', email)
    );

    const querySnapshot = await getDocs(sectionQuery);
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        usersID: doc.data().usersID,
        name: doc.data().name,
        color: doc.data().color,
      };
    });
  } catch (error) {
    console.log(error);
  }
}
