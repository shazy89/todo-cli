export default (state={todos: [], loading: true }, action) => {
  
    switch(action.type) {
        case "ADD_TODO":
            
            return {...state, todos: [ action.todo, ...state.todos]}

            case "ADD_TODOS":
                return {...state, 
                           todos: action.todos,
                           loading: false}
        case "EDIT_TODO":
  
            const edit = state.todos.map(todo => {
                if(todo.id === action.todoObj.id) return action.todoObj
                else return todo
                })
                return {...state, 
                             todos: edit}

         case 'DELETE_TODO':
             const todos = state.todos.filter(todo => todo.id !== action.todo )
             return {...state, todos: todos,
                        loading: false };
                        
                  default:
                    return state;
              }  
          }
             
                      

               

