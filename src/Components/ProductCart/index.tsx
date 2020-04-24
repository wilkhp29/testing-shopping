import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {IProduct} from '../../Store/Shop';
import {Container, Column, Img, Name, Price} from './styles';
import Count from '../Count';

interface props {
  product: IProduct;
}

const Product = ({product}: props) => {
  return (
    <Container testID="productCart">
      <Img source={{uri: product.img}} />
      <Column>
        <Name>{product.name}</Name>
        <Price>R$ {product.price.toString().replace('.', ',')}</Price>
        <Count product={product} />
      </Column>
    </Container>
  );
};

export default Product;
