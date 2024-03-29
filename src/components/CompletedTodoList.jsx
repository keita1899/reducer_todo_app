import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodoList = ({completedTodos, onDeleteCompletedTodo}) => {
  return (
    <>
      <ul>
        {completedTodos.map((todo) => (
          <CompletedTodo key={todo.id} todo={todo} onDeleteCompletedTodo={onDeleteCompletedTodo} />
        ))}
      </ul>
    </>
  )
}