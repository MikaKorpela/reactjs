let nextSongId = 0

export function addSong(name)
{
  return {
    type: 'ADD_SONG',
    id: nextSongId++,
    name
  }
}

export function setComposed(id)
{
  return {
    type: 'SET_COMPOSED',
    id
  }
}

export function setWritten(id)
{
  return {
    type: 'SET_WRITTEN',
    id
  }
}

export function setAdapted(id)
{
  return {
    type: 'SET_ADAPTED',
    id
  }
}