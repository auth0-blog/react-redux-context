import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './provider';
import Consumer from './consumer';
import App from './App';

ReactDOM.render(
  <Provider>
    <Consumer>
      <App />
    </Consumer>
  </Provider>,
  document.getElementById('root')
);
