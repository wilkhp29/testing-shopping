import React from 'react';
import {render} from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {IState} from '../../../src/Store/Shop';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState: IState = {
  products: [
    {
      name: 'item',
      price: 1,
      id: 1,
      img: '',
    },
  ],
  cart: [],
};
export const setup = (Component: any, State?: IState, prop?: any) => {
  const store = {...initialState, ...State};
  return render(
    <Provider store={mockStore(store)}>
      <Component {...prop} />
    </Provider>,
  );
};

export default mockStore(initialState);
