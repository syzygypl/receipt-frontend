import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import configureStore from "../Redux/store";
import CounterContainer from "../Containers/CounterContainer/CounterContainer";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={CounterContainer}/>
      </Router>
    </Provider>
  );
};

export default App;
