export const addTodo = (todo) => {

    return (dispatch) => {
        dispatch({type: 'ADD_TODO', todo})
    }
}
       