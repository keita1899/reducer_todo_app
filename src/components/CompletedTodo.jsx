export const CompletedTodo = ({todo, onDeleteCompletedTodo}) => {

  const handleClick = (id) => {
    onDeleteCompletedTodo(id)
  }
  
  return (
    <>
      <li className="">
        <span className="todo-text">{todo.text}</span>
        <button className="delete-completed-todo-button" onClick={() => handleClick(todo.id)}>削除</button>
      </li>
    </>
  )
}