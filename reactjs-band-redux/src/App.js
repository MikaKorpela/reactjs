import React, {Component} from 'react';
import { connect } from "react-redux";
import Band from './Band';
import {getBands} from './actions/bandActions';

class App extends Component
{
  constructor(props) {
    super(props);
    console.log(`APP CONSTRUCTOR CALLED`);
    this.props.dispatch(getBands());
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

const mapStateToProps = state => {
  return {
    bands: state.bandReducer.bands
  }
};

export default connect(mapStateToProps)(App);