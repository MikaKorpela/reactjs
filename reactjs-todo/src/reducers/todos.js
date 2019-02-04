function todos(state = [], action)
{
  var i;

  switch (action.type) {
    case 'ADD_TODO': {
      const newState = Object.assign([], state);
      const newTodo = {id: action.id, text: action.text, completed: false};
      // newTodo.id = action.id;
      // newTodo.text = action.text;
      // newTodo.completed = false;
      newState.push(newTodo);
      return newState;
    }
      // Original ADD_TODO
      // return [
      //   ...state,
      //   {
      //     id: action.id,
      //     text: action.text,
      //     completed: false
      //   }
      // ]
    case 'TOGGLE_TODO': {
      const newState = Object.assign([], state);

      for (i = 0; i < newState.length; i++)
      {
        if (newState[i].id === action.id)
        {
          newState[i].completed = !newState[i].completed
        }
      }

      return newState;
    }
      // Original TOGGLE_TODO
      // return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
    case 'DELETE_TODO': {
      const newState = Object.assign([], state);
      var todoIndex = undefined;

      for (i = 0; i < newState.length; i++)
      {
        if (newState[i].id === action.id)
        {
          todoIndex = i;
        }
      }

      if (todoIndex !== undefined)
      {
        newState.splice(todoIndex, 1);
      }

      return newState;
    }
    default:
      return state
  }
}

export default todos