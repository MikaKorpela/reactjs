import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo.js'

function AddTodo({dispatch})
{
  let input
  let misc

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
        dispatch(addTodo(input.value, misc.value))
        // reset value.
        input.value = ''
        misc.value = ''
      }}>
        <label>Text</label>
        <input ref={node => input = node} />
        <label>Misc</label>
        <input ref={node => misc = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)