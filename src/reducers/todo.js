export default (state={todos: [], loading: true }, action) => {
  
    switch(action.type) {
        case "ADD_TODO":
            
            return {...state, todos: [...state.todos, action.todo]}

        case "EDIT_TODO":
            const edit = state.todos.map(todo => {
                if(todo.id === action.td.id) return action.td
                else return todo
                })
                return {...state, 
                             todos: edit}
        case "ADD_TODOS":
            return {...state, 
                       todos: action.todos,
                       loading: false}
                   default:
                    return state;
              }  
          }

               

