import React from 'react'
import DuckList from './containers/DuckList'
import NewDuck from './NewDuck'
// import DuckForm from './containers/DuckForm'

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <DuckList />
        <NewDuck />
        {/* <DuckForm /> */}
      </div>
    )
  }
}

export default App