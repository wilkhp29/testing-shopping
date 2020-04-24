import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';
import {IProduct} from '../../Store/Shop';

export const Container = styled.View`
  flex-grow: 1;
`;

export const List = styled(FlatList as new () => FlatList<IProduct>)`
  flex-grow: 1;
`;
