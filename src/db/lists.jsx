import { async } from '@firebase/util';
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

const listsDB = collection(db, 'Lists');

export async function addList(values, userID) {
  addDoc(listsDB, {
    userID: userID,
    name: values.name,
    tag: values.tag,
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
        tag: doc.data().tag,
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

export async function editListInDB(list, id) {
  const listRef = doc(db, 'Lists', id);

  await updateDoc(listRef, {
    name: list.name,
    tag: list.tag,
    color: list.color,
  });
}

export async function getAllDeadLineTasks(userID, setTodayTasks) {
  try {
    const deadLineTasks = [];
    const listsQuery = query(
      collection(db, 'Lists'),
      where('userID', '==', userID)
    );

    const querySnapshot = await getDocs(listsQuery);
    querySnapshot.docs.map(async (list) => {
      try {
        const taskQuery = query(
          collection(db, 'Tasks'),
          where('listID', '==', list.id)
        );

        const querySnapshot = await getDocs(taskQuery);
        querySnapshot.docs.map((task) => {
          const taskDate = new Date(task.data().deadLine.seconds * 1000);
          const nextWeekDate = new Date();
          nextWeekDate.setDate(nextWeekDate.getDate() + 7);
          if (nextWeekDate >= taskDate && task.data().isDone === false) {
            deadLineTasks.push({
              listID: list.id,
              listName: list.data().name,
              listTag: list.data().tag,
              taskID: task.id,
              taskDescription: task.data().description,
              taskDeadlineDate: task.data().deadLine,
            });
          }
        });
        setTodayTasks(deadLineTasks);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
