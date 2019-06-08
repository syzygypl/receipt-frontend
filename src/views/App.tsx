import React from "react";
import { Provider } from "react-redux";

import configureStore from "../Redux/store";
import CounterContainer from "../Containers/SAMPLE__CounterContainer/CounterContainer";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;
