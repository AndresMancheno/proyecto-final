import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const sectionsDB = collection(db, 'Sections');

export async function addSection(values, email) {
  addDoc(sectionsDB, {
    name: values.name,
    color: values.color,
    usersID: email,
  });
}

let fetchTodo = async (email) => {
  try {
    const sectionQuery = query(
      collection(db, 'Sections'),
      where('usersID', '==', email)
    );
    const querySnapshot = await getDocs(sectionQuery);
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

export async function getUserSections(email, setUserSections) {
  const querySnapshot = await fetchTodo(email);

  let userSections = [];
  userSections = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  setUserSections(userSections);
}
