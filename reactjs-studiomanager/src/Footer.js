import React, {Component} from 'react'

export default class Footer extends Component
{
  render() {

    const marginBottom = {
      marginBottom: 0
    }

    return (
      <div className="jumbotron text-center" style={{marginBottom}}>
        <p>Footer</p>
      </div>
    )
  }
}
