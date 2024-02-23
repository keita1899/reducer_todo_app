import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { Todo } from "./components/Todo";
import { CompletedTodoList } from "./components/CompletedTodoList";

function App() {
  const [todo, setTodo] = useState(null)
  const [completedTodos, setCompletedTodos] = useState([])

  const addTodo = (todoText) => {
    const newTodo = {
      id: Math.random(),
      text: todoText,
      isCompleted: false,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const deleteTodo = () => {
    setTodo(null)
  }

  const toggleEditTodo = () => {
    setTodo({
      ...todo,
      isEdit: !todo.isEdit
    })
  }

  const saveTodo = (todoText) => {
    const newTodo = {
      ...todo,
      text: todoText,
      isEdit: false
    }

    setTodo(newTodo)
  }

  const completeTodo = () => {
    const newCompletedTodo = {
      id: todo.id,
      text: todo.text,
      isCompleted: true
    }
    setCompletedTodos([
      ...completedTodos,
      newCompletedTodo
    ])
    setTodo(null)
  }

  const deleteAllCompletedTodo = () => {
    setCompletedTodos([])
  }

  return (
    <div className="App">
      <button className="delete-button" onClick={deleteTodo} disabled={todo ? false : true}>削除</button>
      {todo && (
        <Todo todo={todo} onCompleteTodo={completeTodo} onToggleEditTodo={toggleEditTodo} onSaveTodo={saveTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} disabled={todo ? true : false} />
      <button className="all-delete-button" disabled={completedTodos.length > 0 ? false : true} onClick={deleteAllCompletedTodo}>全て削除</button>
      <CompletedTodoList completedTodos={completedTodos} />
    </div>
  );
}

export default App;
