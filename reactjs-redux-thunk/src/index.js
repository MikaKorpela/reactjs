import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//import "./styles.css";

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

//const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
