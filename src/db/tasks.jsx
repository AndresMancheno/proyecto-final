import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'lib/firebase/firebase';

const tasksDB = collection(db, 'Tasks');

export async function addTask(value, listId) {
  addDoc(tasksDB, {
    description: value,
    isDone: false,
    listID: listId,
  });
}

export async function getUserTasks(listId) {
  try {
    const tasksQuery = query(
      collection(db, 'Tasks'),
      where('listID', '==', listId)
    );

    const querySnapshot = await getDocs(tasksQuery);
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        description: doc.data().description,
        isDone: doc.data().isDone,
        listID: doc.data().listID,
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function toggleTaskInDb(task, listId) {
  const tasksQuery = query(
    collection(db, 'Tasks'),
    where('listID', '==', listId),
    where('description', '==', task.description)
  );

  const querySnapshot = await getDocs(tasksQuery);
  let taskID;
  querySnapshot.forEach((doc) => {
    taskID = doc.id;
  });

  const userRef = doc(db, 'Tasks', taskID);

  await updateDoc(userRef, {
    isDone: !task.isDone,
  });
}
