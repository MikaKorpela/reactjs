export const CREATE_DUCK = 'CREATE_DUCK';
export const UPDATE_DUCK = 'UPDATE_DUCK';
export const DELETE_DUCK = 'DELETE_DUCK';
export const EDIT_DUCK = 'EDIT_DUCK';

var nextDuckId = 0;

export function createDuck(firstName, lastName)
{
  return {
    type: CREATE_DUCK,
    id: nextDuckId++,
    locked: true,
    firstName,
    lastName
  }
}

export function updateDuck(id, firstName, lastName)
{
    return {
        type: UPDATE_DUCK,
        id: id,
        locked: true,
        firstName: firstName,
        lastName: lastName
    }
}

export function deleteDuck(id)
{
  return {
    type: DELETE_DUCK,
    id
  }
}

export function editDuck(id)
{
  return {
    type: EDIT_DUCK,
    locked: false
  }
}
