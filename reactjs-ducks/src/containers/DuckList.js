import { connect } from 'react-redux'
import { updateDuck } from '../actions'
import { deleteDuck } from '../actions'
import AllDucks from '../AllDucks'

function mapStateToProps(state)
{
  return {
    ducks: state.ducks
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    onUpdateClick: (id, firstName, lastName) => dispatch(updateDuck(id, firstName, lastName)),
    onDeleteClick: id => dispatch(deleteDuck(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDucks)