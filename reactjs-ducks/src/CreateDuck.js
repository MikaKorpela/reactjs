import React from 'react'
import PropTypes from 'prop-types'

function CreateDuck({onSaveClick})
{
    let firstName
    let lastName
    
    return (
        <div>
            <form>
                <h3>Create New Duck:</h3>
                <label>First Name:</label>
                <input className="w3-input w3-border" type="text"/>
                <br/>
                <label>Last Name:</label>
                <input className="w3-input w3-border" type="text"/>
                <br/>
                <button className="w3-btn w3-green w3-ripple"><span class="glyphicon glyphicon-ok"></span>&nbsp;Save</button>
                <button className="w3-btn w3-red w3-ripple"><span class="glyphicon glyphicon-remove"></span>&nbsp;Cancel</button>
            </form>
        </div>
    );
}

Duck.propTypes = {
  onSaveClick: PropTypes.func.isRequired
}

export default CreateDuck