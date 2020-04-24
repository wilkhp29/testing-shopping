import store, {setup} from '../../Utils/monks/Store';

import Details from '../../src/Screens/Details';
import {fireEvent, wait} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => {
    navigate: (name: string, obj: object) => {
      name, obj;
    };
  }),
  useRoute: jest.fn(() => ({
    params: {
      product: {
        name: 'item',
        price: 1,
        id: 1,
        img: '',
      },
    },
  })),
}));

test('should print components button text "adicionar ao carrinho"', async () => {
  const {getByText, getByTestId} = setup(Details);

  const name = getByText('item');
  const price = getByText('preço: R$ 1');
  expect(name).not.toBeNull();
  expect(price).not.toBeNull();
  getByTestId('cartBtn').props.onPress();
  expect(getByTestId('textBtn').children[0]).toBe('Adicionar ao carrinho');
});

test('should print components  button text "remover do carrinho"', async () => {
  const {getByText, getByTestId} = setup(Details, {
    products: [],
    cart: [
      {
        name: 'item',
        price: 1,
        id: 1,
        count: 1,
        img: '',
      },
    ],
  });

  const name = getByText('item');
  const price = getByText('preço: R$ 1');
  expect(name).not.toBeNull();
  expect(price).not.toBeNull();
  getByTestId('cartBtn').props.onPress();
  expect(getByTestId('textBtn').children[0]).toBe('Remover do carrinho');
});
