import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Axios from 'axios';

const apiurl = "http://localhost:3001/";

Axios.defaults.baseURL = `${apiurl}`;

ReactDOM.render(<App />, document.getElementById('root'));
