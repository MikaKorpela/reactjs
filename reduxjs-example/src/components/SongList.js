import React from 'react'
import PropTypes from 'prop-types'
import Song from './Song'
import ComposeStatus from './ComposeStatus'

const SongList = ({ songs, setComposed, setWritten, setAdapted }) => (
  <div>
    {songs.map(song =>
      <div>
        <Song
          key={song.id}
          {...song}
          onClick={() => setComposed(song.id)}
        />
        <ComposeStatus
          key={song.id}
          {...song}
          onClick={() => setComposed(song.id)}
        />
      </div>
    )}
  </div>
)

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isComposed: PropTypes.bool.isRequired,
    isWritten: PropTypes.bool.isRequired,
    isAdapted: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  setComposed: PropTypes.func.isRequired,
  setWritten: PropTypes.func.isRequired,
  setAdapted: PropTypes.func.isRequired
}

export default SongList
