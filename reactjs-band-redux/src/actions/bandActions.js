import axios from "axios";
const config = require('../config.json');

export function loadBands() {
  console.log(`LOAD BANDS ACTION CALLED`);
  return new Promise(async (resolve, reject) => {
    await axios.get(`${config.api.invokeUrl}/bands`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });
}

export const fakeLoadBandsSync = () => {
  return {
    items: [
      {
        id: 1,
        band_name: "Metallica",
        genre: "Thrash Metal"
      },
      {
        id: 2,
        band_name: "Anthrax",
        genre: "Speed Metal"
      },
      {
        id: 3,
        band_name: "Helloween",
        genre: "Power Metal"
      }
    ]
  }
}

export function fetchBands() {
  console.log(`FETCH BANDS ACTION CALLED`);
  return dispatch => {
    return loadBands()
      .then(json => {
        dispatch(getBands(json));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const getBand = (id) => {
  return {
    type: 'GET_BAND',
    payload: id
  }
}

export const getBands = (bands) => {
    return {
        type: 'FETCH_BANDS',
        payload: bands
    }
}

export const createBand = (band) => {
    console.log(`CREATE_BAND action called`);

    return {
        type: 'CREATE_BAND',
        payload: band
    }
}

export const updateBand = (band) => {
    console.log(`UPDATE_BAND action called`);

    return {
        type: 'UPDATE_BAND',
        payload: band
    }
}

export const deleteBand = (band) => {
    console.log(`DELETE_BAND action called`);

    return {
        type: 'DELETE_BAND',
        payload: band
    }
}