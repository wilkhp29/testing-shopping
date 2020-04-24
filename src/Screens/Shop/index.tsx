import React from 'react';
import {useSelector} from 'react-redux';
import {Container, List} from './styles';
import {IState, IProduct} from '../../Store/Shop';
import Product from '../../Components/Product';
const Shop = () => {
  const {products}: Array<IProduct> = useSelector<IState>((s) => s);

  return (
    <Container>
      <List
        data={products}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => <Product product={item} />}
      />
    </Container>
  );
};

export default Shop;
