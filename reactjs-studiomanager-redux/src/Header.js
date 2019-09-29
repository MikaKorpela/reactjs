import React, {Component} from 'react'

export default class Header extends Component
{
  render() {
    
    const marginBottom = {
      marginBottom: 0
    }
    
    return (
      <div className="jumbotron text-center" style={marginBottom}>
        <div className="h1">Studio Manager</div>
        <div className="h5">Manage your recording anywhere!</div>
      </div>
    )
  }
}
