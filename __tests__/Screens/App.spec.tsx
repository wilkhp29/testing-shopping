import React from 'react';
import {render, waitForElement} from '@testing-library/react-native';
import App from '../../src';
import {act} from 'react-test-renderer';

test('should testing navigation on click in a product in lista', async () => {
  const {getAllByTestId, getByTestId, getByText} = render(<App />);
  await act(async () => {
    const products = getAllByTestId('productDetails');

    expect(products.length).toBe(10);
    const fistChildren = products[0]?.parent;
    fistChildren?.props.onPress();
    let {btnToAddinCart, textBtnToAddinCart} = await waitForElement(() => ({
      btnToAddinCart: getByTestId('cartBtn'),
      textBtnToAddinCart: getByTestId('textBtn'),
    }));
    expect(textBtnToAddinCart.children[0]).toBe('Adicionar ao carrinho');
    btnToAddinCart.props.onPress();
    expect(textBtnToAddinCart.children[0]).toBe('Remover do carrinho');
    btnToAddinCart.props.onPress();
    expect(textBtnToAddinCart.children[0]).toBe('Adicionar ao carrinho');
    btnToAddinCart.props.onPress();
    //go now navigati page cart
    const header = getByText('Shop');
    header.parentNode.parentNode.children[1].children[0].props.onPress();

    const addCount = getByTestId('addCount');
    const count = getByTestId('count');
    const subtractCount = getByTestId('subtractCount');

    //show count item in cart
    expect(count.children[0]).toBe('1');
    //click in add count
    addCount.props.onPress();
    expect(getByTestId('count').children[0]).toBe('2');
    //subtract add card
    subtractCount.props.onPress();
    expect(getByTestId('count').children[0]).toBe('1');
  });
});
