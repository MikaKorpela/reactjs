import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter = {counter}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT', payload: 10})}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Secret</h3> : ''}
    </div>
  );
}

export default App;
