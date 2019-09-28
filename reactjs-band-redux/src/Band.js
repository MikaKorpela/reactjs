import React, {Component} from 'react';
import { connect } from "react-redux";
import {createBand, updateBand, deleteBand, getBand} from './actions/bandActions';

class Band extends Component {

  constructor(props) {
    super(props);
    console.log(`BAND CONSTRUCTOR CALLED`);
  }

  band = {};

  componentDidMount()
  {
    console.log(`BAND COMPONENTDIDMOUNT CALLED`);
  }

  getBandThing(id) {
    var html;
    this.props.bands.map(band => {
      if (id === band.id) {
        this.band = band;
      }
    });
    
    console.log(`BAND: ${this.band.band_name}`);
    
    html = (
      <div>
        <div>Band name: {this.band.band_name}</div>
        <div>Genre: {this.band.genre}</div>
      </div>
    );

    return html;
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
        <button onClick={() => this.props.updateBand(this.band)}>Update Band</button>
        <button onClick={() => this.props.deleteBand(updatedBand)}>Delete Band</button>
        <button onClick={() => this.props.getBand(10)}>Select</button>
        <div>
          {this.getBandThing(10)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bandReducer.bands,
    band: state.bandReducer.band
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getBand: (id) => dispatch(getBand(id)),
    createBand: (band) => dispatch(createBand(band)),
    updateBand: (band) => dispatch(updateBand(band)),
    deleteBand: (band) => dispatch(deleteBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Band);