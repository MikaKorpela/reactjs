import axios from "axios";
const config = require('../config.json');

/**
 * Create band.
 * 
 * @param {*} band_name 
 * @param {*} genre 
 */
export const createBand = (band_name, genre) => {
    
    const params = {
        band_name: band_name,
        genre: genre
    };
    
    axios.post(`${config.api.invokeUrl}/bands`, params)
        .then(response => {
            
            const band = response.data;

            return {
                type: 'CREATE_BAND',
                payload: band
            }
        })
        .catch(error => {
            throw(error);
        });
}

/**
 * Upate band.
 * 
 * @param {*} id 
 * @param {*} band_name 
 * @param {*} genre 
 */
export const updateBand = (id, band_name, genre) => {
    
    const params = {
        id: id,
        band_name: band_name,
        genre: genre
    };

    axios.put(`${config.api.invokeUrl}/bands/${id}`, params)
        .then(response => {

            const band = response.data;

            return {
                type: 'UPDATE_BAND',
                payload: band
            }
        })
        .catch(error => {
            throw(error);
        });
}

/**
 * Delete band.
 * 
 * @param {*} id 
 */
export const deleteBand = (id) => {

    axios.delete(`${config.api.invokeUrl}/bands/${id}`)
        .then(() => {
            return {
                type: 'DELETE_BAND',
                payload: id
            }
        })
        .catch(error => {
            throw(error);
        });
}

/**
 * Get band.
 * 
 * @param {*} id 
 */
export const getBand = (id) => {

    return {
        type: 'GET_BAND',
        payload: id
    }
}

/**
 * Fetch bands.
 * 
 */
export const fetchBands = async () => {
    console.log("FETCH BANDS");
    
    var bands;
    
    await axios.get(`${config.api.invokeUrl}/bands`)
        .then(response => {
            console.log(`RES: ${response.data}`);
            bands = response.data;
            console.log(`BANDS: ${bands}`);
            // return {
            //     type: 'FETCH_BANDS',
            //     payload: bands
            // }
        })
        .catch(error => {
            throw(error);
        });
    
    console.log("DONE WITH AXIOS");
    return {
        type: 'FETCH_BANDS',
        payload: bands
    }
}

