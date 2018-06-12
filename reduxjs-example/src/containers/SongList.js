import { connect } from 'react-redux'
import { setComposed } from '../actions'
import { setWritten } from '../actions'
import { setAdapted } from '../actions'
import SongList from '../components/SongList'

const mapStateToProps = state => ({
  songs: state.songs
})

const mapDispatchToProps = dispatch => ({
  setComposed: id => dispatch(setComposed(id)),
  setWritten: id => dispatch(setWritten(id)),
  setAdapted: id => dispatch(setAdapted(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)
