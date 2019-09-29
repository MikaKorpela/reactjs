import axios from "axios";
const config = require('../config.json');

export const getBands = async () => {
  console.log(`GET BANDS ACTION CALLED`);
  
  return async dispatch => {
    await axios.get(`${config.api.invokeUrl}/bands`)
      .then(response => {
        dispatch({type: 'GET_BANDS', payload: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const createBand = (band) => {
  console.log(`CREATE BAND ACTION CALLED`);

  return async dispatch => {
    const params = {
      band_name: band.band_name,
      genre: band.genre
    }

    await axios.post(`${config.api.invokeUrl}/bands`, params)
      .then(response => {
        dispatch({type: 'CREATE_BAND', payload: response.data});
      })
      .catch(error => {
        throw error
      })
  };
}

export const updateBand = (band) => {
  console.log(`UPDATE BAND ACTION CALLED`);

  return {
    type: 'UPDATE_BAND',
    payload: band
  }
}

export const deleteBand = (band) => {
  console.log(`DELETE BAND ACTION CALLED`);

  return {
    type: 'DELETE_BAND',
    payload: band
  }
}