import React from 'react'
import { connect } from 'react-redux'
import { createDuck } from '../actions'

function AddTodo({dispatch})
{
  let firstName
  let lastName

  return (
    <div>
      <form onSubmit={e => {
        // prevent default behavior.
        e.preventDefault()
        // trim value; if null, then exit.
        if ((!firstName.value.trim()) || (!lastName.value.trim()))
        {
          return
        }
        // dispatch to store at submit.
        dispatch(createDuck(firstName.value, lastName.value))
        // reset value.
        firstName.value = ''
        lastName.value = ''
      }}>
        <label>First Name</label>
        <input ref={node => firstName = node} />
        <label>Last Name</label>
        <input ref={node => lastName = node} />
        <button type="submit">
          Add Duck
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)