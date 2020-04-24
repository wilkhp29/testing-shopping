import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {IProduct} from '../../Store/Shop';
import {Container, Column, Img, Name, Price} from './styles';

interface props {
  product: IProduct;
}

const Product = ({product}: props) => {
  const navigation = useNavigation();
  return (
    <Container
      testID="productDetails"
      onPress={() =>
        navigation.navigate('Details', {
          product,
        })
      }>
      <Img source={{uri: product.img}} />
      <Column>
        <Name>{product.name}</Name>
        <Price>R$ {product.price.toString().replace('.', ',')}</Price>
      </Column>
    </Container>
  );
};

export default Product;
