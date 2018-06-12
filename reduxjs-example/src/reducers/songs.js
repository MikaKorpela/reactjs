// const todos = (state = [], action) => {
function songs(state = [], action)
{
  switch (action.type) {
    case 'ADD_SONG':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          isComposed: false,
          completed: false,
          completed: false
        }
      ]
    case 'SET_COMPOSED':
      return state.map((song, index) => {
        if (song.id === action.id) {
          return Object.assign({}, song, {
            isComposed: !song.isComposed
          })
        }

        return song
      })
    case 'SET_WRITTEN':
      return state.map((song, index) => {
        if (song.id === action.id) {
          return Object.assign({}, song, {
            isWritten: !song.isWritten
          })
        }

        return song
      })
    case 'SET_ADAPTED':
      return state.map((song, index) => {
        if (song.id === action.id) {
          return Object.assign({}, song, {
            isAdapted: !song.isAdapted
          })
        }

        return song
      })
    default:
      return state
  }
}

export default songs