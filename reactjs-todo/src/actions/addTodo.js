let nextTodoId = 0

export function addTodo(text, misc)
{
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    misc
  }
}