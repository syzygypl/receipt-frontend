import React, { useEffect} from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import configureStore from "../Redux/store";
import * as Routes from './Routes'
import Navigation from './Navigation';

const store = configureStore();

const axiosConfig = () => {
  axios.defaults.baseURL = 'https://receipt-backend.herokuapp.com';
  axios.defaults.headers = {"Access-Control-Allow-Origin": "*"}
}

const App = () => {
  useEffect(() => {
    // basic setup after App mounted
    axiosConfig();
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Navigation/>
        <Route path="/" exact component={Routes.WelcomePage} />
        <Route path="/login" component={Routes.LoginScreen} />
        <Route path="/event-create" component={Routes.EventCreation} />
        <Route path="/event-edit" component={Routes.EventEdition} />
        <Route path="/payment" component={Routes.PaymentConfirmation} />
        { /*TODO: 404 page*/ }
      </Router>
    </Provider>
  );
};

export default App;
