import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #999999;
  padding: 10px;
  background-color: #fff;
  height: 180px;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Name = styled.Text`
  color: #444444;
  flex-wrap: wrap;
  width: 100%;
`;

export const Price = styled.Text`
  color: #666666;
  width: 100%;
  margin-bottom: 20px;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  align-self: center;
  margin-left: 10px;
`;
