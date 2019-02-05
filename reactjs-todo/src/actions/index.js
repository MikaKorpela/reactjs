let nextTodoId = 0

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text, misc)
{
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    misc
  }
}

export function deleteTodo(id)
{
  return {
    type: 'DELETE_TODO',
    id
  }
}

export function toggleTodo(id)
{
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function setVisibilityFilter(filter)
{
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}