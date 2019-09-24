import axios from "axios";
const config = require('../config.json');

// export const fetchBands = async () => {
//     console.log(`FETCH_BANDS action called`);
//     return new Promise(async (resolve, reject) => {
//         await axios.get(`${config.api.invokeUrl}/bands`)
//             .then(response => {
//                 console.log(`FETCH_BANDS action THEN called`);
//                 resolve(response.data);
//             })
//             .catch(error => {
//                 console.log(`FETCH_BANDS action CATCH called`);
//                 reject(error);
//             });    
//         });
// }

// export const fetchBands = async () => {
//     await axios.get(`${config.api.invokeUrl}/bands}`)
//         .then(response => {
//             return {
//                 type: 'FETCH_BANDS',
//                 payload: response.data
//             }
//         });
// }

export function loadBands() {
  return new Promise(async (resolve, reject) => {
    await axios.get(`${config.api.invokeUrl}/bands`)
      .then(response => {
        console.log(`AXIOS RESPONSE: ${response.data}`);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });
}

function fakeLoadBands() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          bands: [
            {
              id: 0,
              band_name: "Metallica",
              genre: "Thrash Metal"
            },
            {
              id: 1,
              band_name: "Anthrax",
              genre: "Speed Metal"
            },
            {
              id: 2,
              band_name: "Helloween",
              genre: "Power Metal"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchBands() {
  return dispatch => {
    return fakeLoadBands()
      .then(json => {
        dispatch(getBands(json.bands));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const getBands = (bands) => {
    return {
        type: "FETCH_BANDS",
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