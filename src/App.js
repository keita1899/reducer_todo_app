import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { Todo } from "./components/Todo";

function App() {
  const [todo, setTodo] = useState(null)

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

  return (
    <div className="App">
      <button className="delete-button" onClick={deleteTodo} disabled={todo ? false : true}>削除</button>
      {todo && (
        <Todo todo={todo} onToggleEditTodo={toggleEditTodo} onSaveTodo={saveTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} disabled={todo ? true : false} />
    </div>
  );
}

export default App;
