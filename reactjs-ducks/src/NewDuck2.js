import React from 'react'
import { connect } from 'react-redux'

function NewDuck2({onSaveClick, firstName, lastName})
{
    // let firstName
    // let lastName
    
    return (
        <div>
            <h3>Create New Duck:</h3>
            <div>First Name</div>
            <input className="w3-input w3-border" type="text" value={firstName} />
            <div>Last Name</div>
            <input className="w3-input w3-border" type="text" value={lastName} />
            <button onClick={onSaveClick} className="w3-btn w3-green w3-ripple">
                <span className="glyphicon glyphicon-ok"/>
            </button>
        </div>
    );
}

export default connect()(NewDuck2)