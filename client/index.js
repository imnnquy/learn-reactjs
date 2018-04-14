import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function tick() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// TODO: Ahihi
setInterval(tick, 1000)
