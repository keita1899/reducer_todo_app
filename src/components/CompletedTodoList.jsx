import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodoList = ({completedTodos}) => {
  return (
    <>
      <ul>
        {completedTodos.map((todo) => (
          <CompletedTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}