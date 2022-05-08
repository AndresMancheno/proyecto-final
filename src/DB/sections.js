import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

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

// For the folowing code to work, it must be placed inside a async  function as well
// const res = await fetchTodo();
// console.log(`Test: ${res.data}`);
export async function getUserSections(email) {
  const querySnapshot = await fetchTodo(email);
  let userSections = [];
  querySnapshot.forEach((doc) => {
    userSections.push(doc.data());
  });

  // querySnapshot.forEach((doc) => {
  //   userSections.push(doc.data());
  // });
  return userSections;
}
