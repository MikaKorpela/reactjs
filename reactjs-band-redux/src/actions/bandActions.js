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
  console.log(`BAND: ${band.band_name}`);
  const params = {
      band_name: band.band_name,
      genre: band.genre
    };
  console.log(`PARAMS: ${params.band_name}`);
  return async dispatch => {
    console.log(`PARAMS2: ${params.band_name}`);
    await axios.post(`${config.api.invokeUrl}/bands`, params)
      .then(response => {
        console.log(`RESPONSE DATA: ${response.band_name}`);
        dispatch({type: 'CREATE_BAND', payload: response.data});
      })
      .catch(error => {
        throw error
      })
  };
}

// export const createBand = (band) => {
//   console.log(`CREATE BAND ACTION CALLED`);

//   return {
//     type: 'CREATE_BAND',
//     payload: band
//   }
// }

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