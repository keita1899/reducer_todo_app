export const Todo = ({todo}) => {
  
  
  return (
    <>
      <div className="todo-container">
        <button className="complete-button">完了</button>
        <span className="todo-text">{todo.text}</span>
        <button className="edit-button">編集</button>
      </div>
    </>
  )
}