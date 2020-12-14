const url = 'http://127.0.0.1:8000/api/task-list/'
const urlUpdate = 'http://127.0.0.1:8000/api/task-update/'
// New todo
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
        fetch(`${urlUpdate + todoInfo.id}/`, {
            method: "POST",
            headers: {
                'Content-type':'application/json',
                Accept: 'application/json'

            },
            responseType:'json',
            body: JSON.stringify(todoInfo)
        })
            .then( resp => resp.json() )
            .then( todo => { debugger
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
            fetch(url)
                .then( resp => resp.json() )
                .then( todos => { 
                    dispatch(populateTodos(todos))})
        }
    }
           
               
               
                
         



    