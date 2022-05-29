import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'lib/firebase/firebase';

const tasksDB = collection(db, 'Tasks');

export async function addTask(value, listId) {
  let actualDate = new Date(Date.now());
  actualDate.setHours(0, 0, 0, 0);

  addDoc(tasksDB, {
    description: value,
    deadLine: actualDate,
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
        deadLine: doc.data().deadLine,
        isDone: doc.data().isDone,
        listID: doc.data().listID,
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function toggleTaskInDb(taskDescription, isDone, listId) {
  const tasksQuery = query(
    collection(db, 'Tasks'),
    where('listID', '==', listId),
    where('description', '==', taskDescription)
  );

  const querySnapshot = await getDocs(tasksQuery);

  let taskID;
  querySnapshot.forEach((doc) => {
    taskID = doc.id;
  });

  const userRef = doc(db, 'Tasks', taskID);
  await updateDoc(userRef, {
    isDone: !isDone,
  });
}

export async function updateProrityInDB(task, listId) {
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
    isPriority: !task.isPriority,
  });
}

export async function updateDeadLineInDB(task, listId, date) {
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
    deadLine: date,
  });
}

export async function removeTaskFromDb(idTask) {
  try {
    const taskQuery = query(
      collection(db, 'Tasks'),
      where('description', '==', idTask)
    );

    const taskSnapshot = await getDocs(taskQuery);

    try {
      taskSnapshot.docs.map(async (taskDoc) => {
        await deleteDoc(doc(db, 'Tasks', taskDoc.id));
      });
    } catch (e) {
      console.log(e);
    }
  } catch (error) {
    console.log(error);
  }
}
