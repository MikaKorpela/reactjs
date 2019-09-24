import React, {Component} from 'react';
import { connect } from "react-redux";
//import {useSelector, useDispatch} from 'react-redux';
//import {useDispatch} from 'react-redux';
//import {createBand, updateBand, deleteBand, fetchBands} from './actions/bandActions';
import {fetchBands, loadBands} from './actions/bandActions';

class App extends Component {

  

  componentDidMount() {
    this.props.dispatch(fetchBands());
    loadBands();
  }
  
  render() {
    
    const { bands } = this.props;
    console.log(this.props);
    console.log(bands);

    return (
      <div>
        <h1>Hello</h1>
          <ul>
            {bands.map(band => (
              <li key={band.id}>{band.band_name}</li>
            ))}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bands: state.bands
});

export default connect(mapStateToProps)(App);