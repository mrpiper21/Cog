import axios from "axios"
import {  AUTH_TOKEN } from 'react-native-dotenv';

// axios.defaults.baseURL = "http://bookish-octo-barnacle-2.onrender.com/"

// axios.defaults.headers.common = {
//     'Authorization': `Bearer ${token}`
//   }

export const baseURL = "https://bookish-octo-barnacle-2.onrender.com/"

export const config = {
    headers: {
        "Authorization": `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "multipart/form-data",
        'accept': 'application/json'
    }
}

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });