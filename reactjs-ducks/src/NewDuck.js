import React from 'react'
import { connect } from 'react-redux'
import { createDuck } from './actions'

function NewDuck({dispatch})
{
    let firstName
    let lastName
    
    return (
        <div>
            <form onSubmit={e => {
                // prevent default behavior.
                e.preventDefault()
                // trim values; if null, then exit.
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
                <h3>Create New Duck:</h3>
                <label>First Name</label>
                <input className="w3-input w3-border" type="text" ref={node => firstName = node} />
                <label>Last Name</label>
                <input className="w3-input w3-border" type="text" ref={node => lastName = node} />
                <button type="submit" className="w3-btn w3-green w3-ripple">
                    <span class="glyphicon glyphicon-ok"/>
                </button>
                {/* <button className="w3-btn w3-green w3-ripple" onClick={onDeleteClick}>
                    <span class="glyphicon glyphicon-ok"/>
                </button> */}
            </form>
        </div>
    );
}

export default connect()(NewDuck)