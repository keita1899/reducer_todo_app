import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { Todo } from "./components/Todo";
import { CompletedTodoList } from "./components/CompletedTodoList";

function App() {
  const [todo, setTodo] = useState(null)
  const [completedTodos, setCompletedTodos] = useState([])

  const hasTodo = todo !== null
  const hasCompletedTodos = completedTodos.length > 0

  const addTodo = (todoText) => {
    if (hasTodo) return

    const newTodo = {
      id: Math.random(),
      text: todoText,
      isCompleted: false,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const deleteTodo = () => {
    if (!hasTodo) return 
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
    if (!hasCompletedTodos) return 
    setCompletedTodos([])
  }

  const deleteCompletedTodo = (id) => {
    const newCompletedTodos = completedTodos.filter(todo => todo.id !== id)
    setCompletedTodos(newCompletedTodos)
  }

  return (
    <div className="App">
      <button className="delete-button" onClick={deleteTodo} disabled={!hasTodo}>削除</button>
      {hasTodo && (
        <Todo todo={todo} onCompleteTodo={completeTodo} onToggleEditTodo={toggleEditTodo} onSaveTodo={saveTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} disabled={hasTodo} />
      <button className="all-delete-button" disabled={!hasCompletedTodos} onClick={deleteAllCompletedTodo}>全て削除</button>
      <CompletedTodoList completedTodos={completedTodos} onDeleteCompletedTodo={deleteCompletedTodo} />
    </div>
  );
}

export default App;
