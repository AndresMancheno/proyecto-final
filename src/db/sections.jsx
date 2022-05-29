import { useAuth } from 'context/authContext';
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
import { getUserLists } from './lists';
import { getUserTasks } from './tasks';

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

export async function removeSectionFromDb(idSection) {
  try {
    const listQuery = query(
      collection(db, 'Lists'),
      where('sectionID', '==', idSection)
    );

    const listSnapshot = await getDocs(listQuery);

    try {
      listSnapshot.docs.map(async (listDoc) => {
        const taskQuery = query(
          collection(db, 'Tasks'),
          where('listID', '==', listDoc.id)
        );
        const taskSnapshot = await getDocs(taskQuery);
        taskSnapshot.docs.map(async (taskDoc) => {
          await deleteDoc(doc(db, 'Tasks', taskDoc.id));
        });
        await deleteDoc(doc(db, 'Lists', listDoc.id));
      });

      await deleteDoc(doc(db, 'Sections', idSection));
    } catch (e) {
      //
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllDeadLineTasks(email, setTodayTasks) {
  let actualDate = new Date(Date.now());
  actualDate.setHours(0, 0, 0, 0);
  try {
    const sections = await getUserSections(email);

    sections.map(async (section) => {
      const lists = await getUserLists(section.id);
      try {
        lists.map(async (list) => {
          const tasks = await getUserTasks(list.id);
          try {
            const todayTasks = [];
            tasks.map(async (task) => {
              const taskDate = new Date(task.deadLine.seconds * 1000);
              if (
                actualDate.getTime() === taskDate.getTime() &&
                task.isDone === false
              ) {
                task = {
                  ...task,
                  sectionName: section.name,
                  listName: list.name,
                };
                todayTasks.push(task);
              }
            });
            setTodayTasks(todayTasks);
          } catch (er) {
            console.log(er);
          }
        });
      } catch (er) {
        console.log(er);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
