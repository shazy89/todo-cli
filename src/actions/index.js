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

export const fetchTodos = () => {
      
    return (dispatch) => {
        fetch('https://rent-me-back-end.herokuapp.com/cars')
            .then( resp => resp.json() )
            .then( todos => {  
                dispatch(addCars(todos))})
    }
}
       