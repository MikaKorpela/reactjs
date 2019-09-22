import React from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {useDispatch} from 'react-redux';
import {createBand, updateBand, deleteBand, fetchBands} from './actions/bandActions';

function App() {

  //const band = useSelector(state => state.band);
  const dispatch = useDispatch();

  var band = {
    id: 1,
    band_name: 'Metallica',
    genre: 'Metal'
  }

  var updatedBand = {
    id: 1,
    band_name: 'Metallica',
    genre: 'Thrash Metal'
  }

  // fetchBands()
  //   .then(data => {
  //     console.log(`DATA: ${data}`);
  //   });

  return (

    <div>
      <h1>Hello</h1>
        <button onClick={() => dispatch(createBand(band))}>Create Band</button>
        <button onClick={() => dispatch(updateBand(updatedBand))}>Update Band</button>
        <button onClick={() => dispatch(deleteBand(updatedBand))}>Delete Band</button>
    </div>
  );
}

export default App;
