import { connect } from 'react-redux'
import { createDuck } from '../actions'
//import { cancelCreate } from '../actions'
import NewDuck2 from '../NewDuck2'

function mapStateToProps()
{
  return {
    firstName: "",
    lastName: ""
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    onSaveClick: (firstName, lastName) => dispatch(createDuck(firstName, lastName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDuck2)