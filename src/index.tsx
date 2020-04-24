import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import Store from './Store';
import Routes from './Routes';
const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor="#0984e3" barStyle={'light-content'} />
      <Routes />
    </Provider>
  );
};

export default App;
