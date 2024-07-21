import { doc, updateDoc, arrayUnion, getDoc, onSnapshot } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from './init';
import { Todo } from './model/types';

export const createTodo = async (todo: string) => {
  const todosRef = doc(db, 'todos', 'todos');
  const todoId = uuidv4();

  await updateDoc(todosRef, {
    todosArr: arrayUnion({
      id: todoId,
      value: todo,
      completed: false,
    }),
  });
};

export const getTodos = async () => {
  const todosRef = doc(db, 'todos', 'todos');
  const snapshot = await getDoc(todosRef);

  if (snapshot.exists()) {
    return snapshot.data().todosArr;
  } else {
    throw new Error('No such document!');
  }
};

export const updateTodos = (cb: (data: Todo[]) => void) => {
  const todosRef = doc(db, 'todos', 'todos');

  const unsubscribe = onSnapshot(todosRef, (snapshot) => {
    if (snapshot.exists()) {
      cb(snapshot.data().todosArr);
    }
  });

  const unmount = () => {
    unsubscribe();
  };

  return unmount;
};

export const updateTodoStatus = async (id: string, completed: boolean) => {
  const todosRef = doc(db, 'todos', 'todos');
  const snapshot = await getDoc(todosRef);

  if (snapshot.exists()) {
    const todosArr = snapshot.data().todosArr;
    const todoIndex = todosArr.findIndex((todo: Todo) => todo.id === id);

    if (todoIndex !== -1) {
      const updatedTodosArr = [...todosArr];
      updatedTodosArr[todoIndex] = {
        ...updatedTodosArr[todoIndex],
        completed,
      };

      await updateDoc(todosRef, {
        todosArr: updatedTodosArr,
      });
    } else {
      throw new Error('Todo not found!');
    }
  } else {
    throw new Error('No such document!');
  }
};

export const removeCompletedTodos = async (data: Todo[]) => {
  const todosRef = doc(db, 'todos', 'todos');
  const updatedTodosArr = data.filter((todo: Todo) => !todo.completed);

  await updateDoc(todosRef, {
    todosArr: updatedTodosArr,
  });
};
