import React, {Component} from 'react';
import { connect } from "react-redux";
import {createBand, updateBand, deleteBand} from './actions/bandActions';
import {Link} from 'react-router-dom';
import Band from './Band'

class Bands extends Component
{
  render()
  {
    const marginTop = {
      marginTop: '30px'
    }

    return (
      <div className="container" style={{marginTop}}>
        <div className="h1">Bands</div>
        <div className="row">
          <div className="col-md-4">
            <Link to={`/newband`}>
              <div className="btn btn-sm btn-success mb-4" role="button">Add Band</div>
            </Link>
          </div>  
        </div>
        <div className="row">
          {this.props.bands.map(band => <Band band={band} id={band.id} key={band.id} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Bands);
