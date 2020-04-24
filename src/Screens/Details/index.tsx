import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerDetails,
  Img,
  Name,
  Price,
  Button,
  TextButton,
} from './styles';
import {IProduct, IState, Creators} from '../../Store/Shop';
import {useSelector, useDispatch} from 'react-redux';

interface params {
  product: IProduct;
}

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const product: IProduct = route.params.product;
  const dispatch = useDispatch();
  const isCart = useSelector<IState>((s) =>
    s.cart
      ?.filter((item) => item.id === product.id)
      .reduce((prevous, current) => current.id === product.id && true, false),
  );

  return (
    <Container>
      <Img source={{uri: product.img}} />
      <ContainerDetails>
        <Name>{product.name}</Name>
        <Price>preço: R$ {product.price.toString().replace('.', ',')}</Price>
        <Button
          testID="cartBtn"
          onPress={() => {
            isCart
              ? dispatch(Creators.removeCar(product))
              : dispatch(Creators.addCar(product));
          }}>
          <TextButton testID="textBtn">
            {isCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          </TextButton>
        </Button>
      </ContainerDetails>
    </Container>
  );
};
export default Details;
