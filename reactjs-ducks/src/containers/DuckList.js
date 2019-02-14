import { connect } from 'react-redux'
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
    onDeleteClick: id => dispatch(deleteDuck(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDucks)