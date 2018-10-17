import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const CatContainer = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight};
  left: 0;
  right: 0;
  height: 64;
  align-items: center;
  justify-content: center;
  border: red 1px;
`;

const Cat = styled.Text`
  /* background-color: #fffa; */
  /* background: #fffa; */
  border-radius: 8;
  /* font-family: 'playfair-display'; */
  padding: 8px;
  overflow: hidden;
`;

export const CategoryTitle: React.SFC<{ category: string }> = ({ category }) => {
  return (
    <CatContainer>
      <Cat>{category}</Cat>
    </CatContainer>
  );
};