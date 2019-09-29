import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {createBand, updateBand, deleteBand} from './actions/bandActions';

class Band extends Component
{
  render()
  {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <p className="card-header h5">{this.props.band.band_name}</p>
          <div className="card-body">
            <p className="card-text">{this.props.band.genre}</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/bands/${this.props.id}`}>
                <div className="btn btn-info btn-sm" role="button">View</div>
              </Link>
              <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.deleteBand(this.props.band)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
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
