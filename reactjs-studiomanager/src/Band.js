import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Band extends Component {

  state = {
    isEditMode: false,
    updatedBandName: this.props.band_name,
    updatedGenre: this.props.genre
  }

  handleBandEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateProduct(this.props.id, this.state.updatedBandName, this.state.updatedGenre);
  }

  onAddBandNameChange = event => this.setState({ "updatedBandName": event.target.value });
  onAddGenreChange = event => this.setState({ "updatedGenre": event.target.value });

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <p className="card-title h2">{this.props.band_name}</p>
            <p className="card-text">{this.props.genre}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/bands/${this.props.id}`}>
                  <div className="btn btn-sm btn-outline-secondary" tabIndex="-1" role="button" aria-disabled="true">View</div>
                </Link>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={event => this.props.handleDeleteBand(this.props.id, event)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <article className="tile is-child box notification is-info">
	    //   <button onClick={event => this.props.handleDeleteBand(this.props.id, event)} className="delete"></button>
      //   <Link to={`/bands/${this.props.id}`}>
		  //     <p className="title">{this.props.band_name}</p>
		  //   </Link>
      // </article>
    )
  }
}
