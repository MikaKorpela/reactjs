import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UserForm from './UserForm.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UserForm />
      </Provider>
    );
  }
}

export default App;