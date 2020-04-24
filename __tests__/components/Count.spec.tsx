import Count from '../../src/Components/Count';
import {setup} from '../../Utils/monks/Store';

const product = {
  name: 'item',
  price: 1,
  id: 1,
  img: '',
  count: 888,
};
const cart = [product];

test('should print components text', async () => {
  const {getByTestId} = setup(Count, {cart: cart, products: []}, {product});

  const count = getByTestId('count');
  const addCount = getByTestId('addBtnText');
  const subtractCount = getByTestId('subtractBtnText');
  expect(count.children[0]).toBe('888');
  expect(addCount.children[0]).toBe('+');
  expect(subtractCount.children[0]).toBe('-');
});
