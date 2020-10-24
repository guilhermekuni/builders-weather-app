import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
