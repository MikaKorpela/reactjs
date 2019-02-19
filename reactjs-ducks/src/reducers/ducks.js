import {CREATE_DUCK, UPDATE_DUCK, DELETE_DUCK} from '../actions'

function ducks(state = [], action)
{
  var duckIndex;

  switch (action.type) {
    case CREATE_DUCK: {
      const newState = Object.assign([], state);
      const newDuck = {id: action.id, firstName: action.firstName, lastName: action.lastName};
      newState.push(newDuck);
      return newState;
    }
    case UPDATE_DUCK: {
      const newState = Object.assign([], state);

      for (duckIndex = 0; duckIndex < newState.length; duckIndex++)
      {
        if (newState[duckIndex].id === action.id)
        {
          newState[duckIndex].firstName = action.firstName;
          newState[duckIndex].lastName = action.lastName;

          break;
        }
      }

      return newState;
    }
    case DELETE_DUCK: {
      const newState = Object.assign([], state);

      for (duckIndex = 0; duckIndex < newState.length; duckIndex++)
      {
        if (newState[duckIndex].id === action.id)
        {
          newState.splice(duckIndex, 1);

          break;
        }
      }
      
      return newState;
    }
    default:
      return state
  }
}

export default ducks