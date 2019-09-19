import axios from "axios";
const config = require('../config.json');

export const fetchBands = async () => {
    console.log("FETCH BANDS");
    
    var bands;
    
    await axios.get(`${config.api.invokeUrl}/bands`)
        .then(response => {
            console.log(`RES: ${response.data}`);
            bands = response.data;
            console.log(`BANDS: ${bands}`);
            return {
                type: 'FETCH_BANDS',
                payload: bands
            }
        })
        .catch(error => {
            throw(error);
        });
    
    // console.log("DONE WITH AXIOS");
    // return {
    //     type: 'FETCH_BANDS',
    //     payload: bands
    // }
}

export const fetchBands2 = (bands) => {
    console.log("FETCH BANDS2");
    return {
        type: 'FETCH_BANDS',
        payload: bands
    }
}

