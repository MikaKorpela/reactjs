import axios from "axios";
import {fetchBands2} from '../actions/bandActions'
const config = require('../config.json');

export const getBands = () => {
    console.log("GET BANDS");
    return (dispatch) => {
    
        return axios.post(`${config.api.invokeUrl}/bands`)
            .then(response => {
            
                const bands = response.data;
                console.log(`BANDS: ${bands}`)
                dispatch(fetchBands2(bands));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const getBands2 = () => {
    console.log("GET BANDS 2");
    return function(dispatch) {
        console.log(`DISPATCH`);
        return axios.post(`${config.api.invokeUrl}/bands`)
            .then(({ data }) => {
                console.log(`DATA: ${data}`);
                dispatch(fetchBands2(data));
            })
            .catch(error => {
                console.log(`ERROR ${error}`);
                throw(error);
            });
    };
};