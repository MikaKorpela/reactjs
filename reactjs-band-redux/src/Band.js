import React, {Component} from 'react';
import { connect } from "react-redux";
import {createBand, updateBand, deleteBand} from './actions/bandActions';

class Band extends Component {

  band = {}

  getBandThing(id) {
    console.log(`GET BAND THINGS CALLED`);
    this.band = this.props.bands.find(band => band.id === id);
    
    if (this.band !== undefined) {
      return (
        <div>
          <div>Band name: {this.band.band_name}</div>
          <div>Genre: {this.band.genre}</div>
        </div>
      );
    }
  }

  render() {
    
    var newBand = {
      id: 99,
      band_name: "Error In Quotes",
      genre: "Punk"
    }

    var updatedBand = {
      id: 99,
      band_name: "EIQ",
      genre: "Punk"
    }

    return (
      <div>
        <ul>
            {this.props.bands.map(band => (
                <li key={band.id}>{band.band_name}</li>
            ))}
        </ul>
        <button onClick={() => this.props.createBand(newBand)}>Create Band</button>
        <button onClick={() => this.props.updateBand(updatedBand)}>Update Band</button>
        <button onClick={() => this.props.deleteBand(updatedBand)}>Delete Band</button>
        <div>
          {this.getBandThing(10)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bandReducer.bands
  }
};

function mapDispatchToProps(dispatch) {
  return {
    createBand: (band) => dispatch(createBand(band)),
    updateBand: (band) => dispatch(updateBand(band)),
    deleteBand: (band) => dispatch(deleteBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Band);