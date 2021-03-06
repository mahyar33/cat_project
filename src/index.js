import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import fa from 'react-intl/locale-data/fa'
addLocaleData(en);
addLocaleData(fa);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
