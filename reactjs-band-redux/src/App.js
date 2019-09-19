import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {fetchBands} from './actions/bandActions';
import {getBands2} from './operations/bandOperations';

function App() {

  const band = useSelector(state => state.band);
  //const dispatch = useDispatch();

  //dispatch(fetchBands());
  getBands2();

  return (
    <div>
      <h1>Hello</h1>
      {band}
    </div>
  );
}

export default App;
