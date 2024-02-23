export const CompletedTodo = ({todo}) => {
  
  return (
    <>
      <li className="">
        <span className="todo-text">{todo.text}</span>
        <button className="delete-completed-todo-button">削除</button>
      </li>
    </>
  )
}