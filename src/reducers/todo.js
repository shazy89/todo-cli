export default (state={todos: [], loading: true }, action) => {
  
    switch(action.type) {
        case "ADD_TODO":
            debugger
            return {...state, todos: [...state.todos, action.todo]}
               
               default:
                return state;
      }  
  }