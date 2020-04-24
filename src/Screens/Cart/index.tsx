import React from 'react';
import {useSelector} from 'react-redux';
import {Container, List} from './styles';
import {IState, IProduct} from '../../Store/Shop';
import ProductCart from '../../Components/ProductCart';
const Cart = () => {
  const {cart}: Array<IProduct> = useSelector<IState>((s) => s);

  return (
    <Container>
      <List
        data={cart}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => <ProductCart product={item} />}
      />
    </Container>
  );
};

export default Cart;
