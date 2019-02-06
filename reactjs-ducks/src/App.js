import React from 'react'
import DuckList from './containers/DuckList'
import AddDuck from './containers/AddDuck'

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <DuckList />
        <AddDuck />
      </div>
    )
  }
}

export default App