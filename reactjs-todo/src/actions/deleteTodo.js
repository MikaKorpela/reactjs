export function deleteTodo(id)
{
  return {
    type: 'DELETE_TODO',
    id
  }
}