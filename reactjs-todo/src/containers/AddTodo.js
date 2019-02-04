import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo.js'

function AddTodo({dispatch})
{
  let input

  return (
    <div>
      <form onSubmit={e => {
        // prevent default behavior.
        e.preventDefault()
        // trim value; if null, then exit.
        if (!input.value.trim()) {
          return
        }
        // dispatch to store at submit.
        dispatch(addTodo(input.value))
        // reset value.
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)