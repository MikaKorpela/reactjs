import React, {Component} from 'react';
import { connect } from "react-redux";
import {createBand, updateBand, deleteBand} from './actions/bandActions';

class Band extends Component {

  state = {
    sband: {}
  }

  componentDidMount()
  {
    console.log(`COMPONENT MOUNTED`);
    var id = 10;
    this.props.bands.map(band => {
      console.log(`ROUND ${band.id}`);
      if (band.id === id) {
        console.log(`BAND FOUND`);
        this.setState({sband: band});
      }
    })
  }

  render() {

    var band = {
      id: 99,
      band_name: "Error In Quotes",
      genre: "Punk"
    }

    var updatedBand = {
      id: 99,
      band_name: "EIQ",
      genre: "Punk"
    }

    // const foo = (id) => {
    //   this.props.bands.map(band => {
    //     if (band.id === id) {
    //       queriedBand = band;
    //     }
    //   });
    // }

    // foo(99);

    return (
      <div>
        <ul>
            {this.props.bands.map(band => (
                <li key={band.id}>{band.band_name}</li>
            ))}
        </ul>
        <button onClick={() => this.props.dispatch(createBand(band))}>Create Band</button>
        <button onClick={() => this.props.dispatch(updateBand(updatedBand))}>Update Band</button>
        <button onClick={() => this.props.dispatch(deleteBand(updatedBand))}>Delete Band</button>
        <div>
          BAND: {this.state.sband.band_name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};

export default connect(mapStateToProps)(Band);