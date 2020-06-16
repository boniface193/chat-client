import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

// this is mdb import
import '@fortawesome/fontawesome-free/css/all.min.css'; import
    'bootstrap-css-only/css/bootstrap.min.css'; import
    'mdbreact/dist/css/mdb.css';

ReactDom.render(<App />, document.querySelector('#root'))