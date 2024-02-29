import { useReducer } from "react"
import { AddTodoForm } from "./components/AddTodoForm"
import { Todo } from "./components/Todo"
import { CompletedTodoList } from "./components/CompletedTodoList"
import { reducer } from "./reducer"
import { ActionTypes } from './actionTypes'

/**
 * Reducerの処理の流れ
 * 現在のstateとアクションを受け取り、新しい状態を返すreducer関数を作る
 * useReducerをインポートする
 * initialStateを定義する
 * useReducerにreducerとinitialStateを渡して、状態とdispatchを受け取る
 * dispatchはアクションを送信して状態を更新する
 * type
 * payloadは送信されたデータ
 * 
 */

const App = () => {
  const initialState = {
    todo: null,
    completedTodos: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { todo, completedTodos} = state

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

    dispatch({ type: ActionTypes.ADD_TODO, payload: newTodo })
  }

  const deleteTodo = () => {
    if (!hasTodo) return 
    dispatch({ type: ActionTypes.DELETE_TODO})
  }

  const toggleEditTodo = () => {
    dispatch({ type: ActionTypes.TOGGLE_EDIT_TODO })
  }

  const saveTodo = (todoText) => {
    dispatch({ type: ActionTypes.SAVE_TODO, payload: todoText })
  }

  const completeTodo = () => {
    dispatch({ type: ActionTypes.COMPLETED_TODO })
  }

  const deleteAllCompletedTodo = () => {
    if (!hasCompletedTodos) return 
    dispatch({ type: ActionTypes.DELETE_ALL_COMPLETED_TODO })
  }

  const deleteCompletedTodo = (id) => {
    dispatch({ type: ActionTypes.DELETE_COMPLETED_TODO, payload: id })

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
