import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from './init';

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
