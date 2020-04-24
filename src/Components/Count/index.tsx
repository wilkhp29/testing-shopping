import React from 'react';

import {Container, Button, Label, TextButton} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {IState, Creators, IProduct} from '../../Store/Shop';

interface props {
  product: IProduct;
}

const Count = ({product}: props) => {
  const [count] = useSelector<IState, Array<number>>((s) =>
    s?.cart
      ?.filter((item) => item.id === product.id)
      .map<number>((item) => item.count || 0),
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <Button
        testID="addCount"
        onPress={() => dispatch(Creators.AddCount(product))}>
        <TextButton testID="addBtnText">+</TextButton>
      </Button>
      <Label testID="count">{count}</Label>
      <Button
        testID="subtractCount"
        onPress={() => dispatch(Creators.SubtractCount(product))}>
        <TextButton testID="subtractBtnText">-</TextButton>
      </Button>
    </Container>
  );
};

export default Count;
