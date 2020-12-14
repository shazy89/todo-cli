const url = 'http://127.0.0.1:8000/api/'

// New todo
const addTodo = (todo) => {
    return (dispatch) => {
        dispatch({type: 'ADD_TODO', todo})
    }
}
export const createTodo = (todoObj) => {
    
    return (dispatch) => {
     fetch(url + 'task-create/', {
   method: 'POST',
   headers: {
       'Content-type':'application/json',
       Accept: 'application/json'
   },
   body: JSON.stringify(todoObj)
   })
   .then((response) => response.json())
   .then(todo => { 
    dispatch(addTodo(todo))
   })
   .catch((error)=> {
      console.log('ERROR:', error)
 })
}
}


 // Edit Todos       
export const editTask = (todoObj) => {

    return (dispatch) => {
        dispatch({type: 'EDIT_TODO', todoObj})
    }
}
export const editTd = (todoInfo) => {

    return (dispatch) => {
        fetch(url + `task-update/${todoInfo.id}/`, {
            method: "POST",
            headers: {
                'Content-type':'application/json',
                Accept: 'application/json'

            },
            responseType:'json',
            body: JSON.stringify(todoInfo)
        })
            .then( resp => resp.json() )
            .then( todo => { 
                dispatch(editTask(todo))
            })
            .catch((errors) => console.log(errors) )
        }
    }
               
                
// Populate Todos
    const populateTodos = (todos) => {
        return {
            type: "ADD_TODOS",
            todos
        }
    }
    
    export const fetchTodos = () => {
        return (dispatch) => {
            fetch(url + 'task-list/')
                .then( resp => resp.json() )
                .then( todos => { 
                    dispatch(populateTodos(todos))})
        }
    }
    
    // Remove Todos
    const removeTodo = (todo) => {
        return {
            type: 'DELETE_TODO',
            todo
          }
        }

    export const deleteTodo = (todoId) => {
        return (dispatch) => {
            return fetch(`http://127.0.0.1:8000/api/task-delete/${todoId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type':'application/json'
                }
            })
                 .then( resp => resp.json() )
                 .then( todo => { 
                   dispatch(removeTodo(todoId))
                   alert(todo)
            })
         }
    }
       


           
               
               
                
         



    