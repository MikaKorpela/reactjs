import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from "axios";
import Band from './Band'
const config = require('./config.json');

export default class Bands extends Component 
{
  state = {
    newproduct: null,
    bands: []
  }

  fetchBands = async () => {
    try {
      const response = await axios.get(`${config.api.invokeUrl}/bands`);
      const bands = response.data;
      this.setState({ bands: bands });
    } catch (err) {
      console.log(`Error when fetching the bands: ${err}.`);
    }
  }

  componentDidMount = () => {
    this.fetchBands();
  }

  handleDeleteBand = async (id, event) => {
    event.preventDefault();
    try {
      await axios.delete(`${config.api.invokeUrl}/bands/${id}`);
      const updatedBands = [...this.state.bands].filter(band => band.id !== id);
      this.setState({bands: updatedBands});
    }catch (err) {
      console.log(`Unable to delete product: ${err}`);
    }
  }

  render() {
    
    const marginTop = {
      marginTop: '30px'
    }

    return (
      <div className="container" style={{marginTop}}>
            <div className="h1">Bands</div>
            { this.state.bands.map(band => <Band band_name={band.band_name} genre={band.genre} id={band.id} key={band.id} handleDeleteBand={this.handleDeleteBand} />) }
      </div>
      // <Fragment>
      //   <section className="section">
      //     <div className="container">
      //       <h2 className="title">
      //         Bands
      //       </h2>
      //       <div className="columns is-1">
      //         <div className="column box is-two-thirds has-background-primary">
      //           <div className="tile is-ancestor">
      //             <div className="tile is-4 is-parent is-vertical">
      //               { this.state.bands.map(band => <Band band_name={band.band_name} genre={band.genre} id={band.id} key={band.id} handleDeleteBand={this.handleDeleteBand} />) }
      //             </div>
      //           </div>
      //         </div>
      //         <div className="column id-one-third">
      //           <div className="buttons">
      //             <div className="button is-primary">
      //               <Link to='/newband'>
      //                 Add Band
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </Fragment>
    )
  }
}
