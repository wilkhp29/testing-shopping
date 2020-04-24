import React from 'react';
import {render} from '@testing-library/react-native';
import 'react-native-gesture-handler';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Shop from '../../src/Screens/Shop';
import {IState} from '../../src/Store/Shop';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => {
    navigate: (name: string, obj: object) => {
      name, obj;
    };
  }),
}));

const middlewares: Array<any> = [];
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
const store = mockStore(initialState);

test('should print components text', async () => {
  const {getByText} = render(
    <Provider store={store}>
      <Shop />
    </Provider>,
  );

  const name = getByText('item');
  const price = getByText('R$ 1');
  expect(name).not.toBeNull();
  expect(price).not.toBeNull();
});
