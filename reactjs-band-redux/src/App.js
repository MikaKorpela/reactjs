import React, {Component} from 'react';
import { connect } from "react-redux";
//import {useSelector, useDispatch} from 'react-redux';
//import {useDispatch} from 'react-redux';
//import {createBand, updateBand, deleteBand, fetchBands} from './actions/bandActions';
import Band from './Band';
import {fetchBands, loadBands} from './actions/bandActions';

class App extends Component {

  

  componentDidMount() {
    this.props.dispatch(fetchBands());
  }
  
  render() {
    
    return (
      <div>
        <h1>Hello</h1>
          <Band />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //bands: state.bands
});

export default connect(mapStateToProps)(App);
