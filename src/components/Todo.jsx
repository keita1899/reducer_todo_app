import { useState } from "react"

export const Todo = ({todo, onCompleteTodo, onToggleEditTodo, onSaveTodo}) => {
  const [updateTodoText, setUpdateTodoText] = useState(todo.text)

  const handleToggleEditTodo = () => {
    onToggleEditTodo()
  }

  const handleSaveTodo = () => {
    if (updateTodoText.trim()) {
      onSaveTodo(updateTodoText)
    }
  }

  const handleCompleteTodo = () => {
    onCompleteTodo()
  }
  
  return (
    <div>
      {!todo.isEdit && 
        <div className="todo">
          <button className="complete-button" onClick={handleCompleteTodo}>完了</button>
          <span className="todo-text">{todo.text}</span>
          <button className="edit-button" onClick={handleToggleEditTodo}>編集</button>
        </div>
      }
      {todo.isEdit && 
        <div className="edit-todo-form">
          <input type="text" className="edit-todo-input" onChange={(e) => setUpdateTodoText(e.target.value)} value={updateTodoText} />
          <button className="save-button" onClick={handleSaveTodo}>更新</button>
          <button className="return-button" onClick={handleToggleEditTodo}>戻す</button>
        </div>
      }
    </div>
  )
}