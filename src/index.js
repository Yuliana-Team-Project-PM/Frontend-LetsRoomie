import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

sessionStorage.setItem('Token',"");

ReactDOM.render(<App />, document.getElementById('App'));