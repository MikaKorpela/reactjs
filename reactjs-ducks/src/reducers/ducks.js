function ducks(state = [], action)
{
  var index;

  switch (action.type) {
    case 'ADD_DUCK': {
      const newState = Object.assign([], state);
      const newDuck = {id: action.id, firstName: action.firstName, lastName: action.lastName};
      newState.push(newDuck);
      return newState;
    }
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
    case 'DELETE_DUCK': {
      const newState = Object.assign([], state);
      var duckIndex = undefined;

      for (index = 0; index < newState.length; index++)
      {
        if (newState[index].id === action.id)
        {
          duckIndex = index;
        }
      }

      if (duckIndex !== undefined)
      {
        newState.splice(duckIndex, 1);
      }

      return newState;
    }
    default:
      return state
  }
}

export default ducks