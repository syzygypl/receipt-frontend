import axios from 'axios';

export const axiosConfig = () => {
  axios.defaults.baseURL = 'https://receipt-backend.herokuapp.com';
  axios.defaults.headers = {"Access-Control-Allow-Origin": "*"}
}
