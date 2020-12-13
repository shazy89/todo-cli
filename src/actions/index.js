const url = 'http://127.0.0.1:8000/api/task-list/'
const addTodo = (todo) => {

    return (dispatch) => {
        dispatch({type: 'ADD_TODO', todo})
    }
}

export const createTodo = (todoObj) => {
    
    return (dispatch) => {
  fetch('http://127.0.0.1:8000/api/task-create/', {
    method: 'POST',
    headers: {
        'Content-type':'application/json',
     
    },
    body: JSON.stringify(todoObj)
})
.then((response) => response.json())
.then(todo => { debugger
  dispatch(addTodo(todo))
})
.catch((error)=> {
    console.log('ERROR:', error)
})
}
}
        


export const editTd = (todo, id, completed) => {
      let td = {
          id: id,
          title: todo,
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
    