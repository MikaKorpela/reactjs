import React, {Component} from 'react';
import { connect } from "react-redux";
import Band from './Band';
import {fetchBands} from './actions/bandActions';

class App extends Component
{
  componentDidMount()
  {
    this.props.dispatch(fetchBands());
  }
  
  render()
  {
    return (
      <div>
        <h1>Hello</h1>
          <Band />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
