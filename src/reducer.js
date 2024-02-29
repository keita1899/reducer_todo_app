import { ActionTypes } from './actionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    // stateの更新
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todo: action.payload
      }
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todo: null
      }
    case ActionTypes.TOGGLE_EDIT_TODO:
      return {
        ...state,
        todo: {
          ...state.todo,
          isEdit: !state.todo.isEdit
        }
      }
    case ActionTypes.SAVE_TODO:
      return {
        ...state,
        todo: {
          ...state.todo,
          text: action.payload,
          isEdit: false
        }
      }
    case ActionTypes.COMPLETED_TODO:
      const newCompletedTodo = {
        id: state.todo.id,
        text: state.todo.text,
        isCompleted: true
      }
      return {
        ...state,
        completedTodos: [
          ...state.completedTodos,
          newCompletedTodo
        ],
        todo: null
      }
    case ActionTypes.DELETE_COMPLETED_TODO:
      const newCompletedTodos = state.completedTodos.filter(
        (todo) => todo.id !== action.payload
      )
      return {
        ...state,
        completedTodos: newCompletedTodos
      }
    case ActionTypes.DELETE_ALL_COMPLETED_TODO:
      return {
        ...state,
        completedTodos: []
      }
    default:
      return state
  }
}