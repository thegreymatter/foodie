import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './store'
import Routes from "./routes";
import {Provider} from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

// import injectTapEventPlugin from "react-tap-event-plugin";
// injectTapEventPlugin();

ReactDOM.render(
    <Provider store={Store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
