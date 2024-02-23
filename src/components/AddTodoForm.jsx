import { useState } from "react"

export const AddTodoForm = ({onAddTodo, disabled}) => {
  const [todoText, setTodoText] = useState('')

  const handleClick = () => {
    if (todoText.trim()) {
      onAddTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <>
      <div className="add-todo-form">
        <input type="text" className="add-todo-input" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
        <button className="add-button" onClick={handleClick} disabled={disabled}>保存</button>
      </div>
    </>
  )
}