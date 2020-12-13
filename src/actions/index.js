const url = 'http://127.0.0.1:8000/api/task-list/'
export const addTodo = (todo) => {

    return (dispatch) => {
        dispatch({type: 'ADD_TODO', todo})
    }
}

export const editTd = (todo, id, completed) => {
      let td = {
          id: id,
          task: todo,
          completed: completed
      }
    return (dispatch) => {
        dispatch({type: 'EDIT_TODO', td})
    }
}

const populateTodos = (todos) => {
    return {
        type: "ADD_TODOS",
        todos
    }
}

export const fetchTodos = () => {

    return (dispatch) => {
        fetch(url)
            .then( resp => resp.json() )
            .then( todos => { 
                dispatch(populateTodos(todos))})
    }
}
       