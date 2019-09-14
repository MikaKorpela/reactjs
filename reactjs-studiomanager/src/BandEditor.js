import React, {Component}  from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
const config = require('./config.json');

export default class BandEditor extends Component 
{
    constructor() {
        super();
        this.state = {
            id: '',
            band_name: '',
            genre: '',
            disabled: true,
            addMode: false
        }
    }

    fetchBand = async (id) => {
        try {
            const response = await axios.get(`${config.api.invokeUrl}/bands/${id}`);
            const band = response.data[0];
            this.setState({ id: id, band_name: band.band_name, genre: band.genre });
        } catch (err) {
            console.log(`Error when fetching the band: ${err}.`);
        }
    }

    componentDidMount = () => {
        if (this.props.match.params.id !== undefined) {
            this.fetchBand(this.props.match.params.id);
        } else {
            this.setState({band_name: '', genre:'', disabled: false, addMode: true});
        }
    }

    handleBandEdit = event => {
        event.preventDefault();
        this.setState({disabled: false});
    }

    handleBandSave = event => {
        event.preventDefault();
        
        if (this.state.addMode) {
            this.handleCreateBand(this.state.band_name, this.state.genre);
        } else {
            this.handleUpdateBand(this.state.id, this.state.band_name, this.state.genre);
        }
        this.setState({disabled: true});
        this.setState({addMode: false});
    }

    onBandNameChange = event => {
        this.setState({ band_name: event.target.value });
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    }

    handleUpdateBand = async (id, band_name, genre) => {
        
        try {
            const params = {
                "id": id,
                "band_name": band_name,
                "genre": genre
            };
            await axios.put(`${config.api.invokeUrl}/bands/${id}`, params);
            this.setState({band_name: band_name, genre: genre})
        } catch (err) {
            console.log(`Error when updating band: ${err}`);
        }
    }

    handleCreateBand = async (band_name, genre) => {
        
        try {
            const params = {
                "band_name": band_name,
                "genre": genre
            };
            const response = await axios.post(`${config.api.invokeUrl}/bands`, params);
            console.log(`RESPONSE: ${response}`);
            const band = response.data;
            console.log(`BAND: ${band}`);
            this.setState({ id: band.id}); //, band_name: band.band_name, genre: band.genre });
        } catch (err) {
            console.log(`Error when creating band: ${err}`);
        }
    }
    
    render() {

        const marginTop = {
            marginTop: '30px'
        }

        return (
            <div className="container" style={{marginTop}}>
                <div className="h1">
                    {
                        this.state.addMode
                        ? <div>
                            New Band
                        </div>
                        :<div>
                            Band: {this.state.band_name}
                        </div>
                    }
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="band-name">Name</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="band-name" value={this.state.band_name} onChange={this.onBandNameChange}/>
                        </div>
                        <label htmlFor="genre">Genre</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="genre" value={this.state.genre} onChange={this.onGenreChange}/>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleBandEdit}>Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleBandSave}>Save</button>
                            <Link to={`/bands`}>
                                <div className="btn btn-sm btn-outline-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancel</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}