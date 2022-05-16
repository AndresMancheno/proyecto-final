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

export async function addTask(value) {
  addDoc(tasksDB, {
    description: value,
    isDone: false,
    listID: 'W1CpRv3MCAQjIUppyumX',
  });
}

export async function getUserTasks(listID = 'W1CpRv3MCAQjIUppyumX') {
  try {
    const tasksQuery = query(
      collection(db, 'Tasks'),
      where('listID', '==', listID)
    );

    const querySnapshot = await getDocs(tasksQuery);
    return querySnapshot.docs.map((doc) => {
      return doc.data();
    });
  } catch (error) {
    console.log(error);
  }
}

export async function toggleTaskInDb(task, listID = 'W1CpRv3MCAQjIUppyumX') {
  console.log(task);
  const tasksQuery = query(
    collection(db, 'Tasks'),
    where('listID', '==', 'W1CpRv3MCAQjIUppyumX'),
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
