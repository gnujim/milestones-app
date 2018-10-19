import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const CatContainer = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight + 100};
  /* left: 0; */
  /* right: 0; */
  max-width: 100%;
  align-self: center;
  /* height: 30%; */
  /* align-items: center; */
  /* justify-content: center; */
  border: 1px red;
`;

const Cat = styled.Text`
  /* background-color: #fffa; */
  /* background: #fffa; */
  font-family: 'playfair-display-bold';
  font-size: 22px;
  padding: 8px;
  overflow: hidden;
`;

export const Category: React.SFC<{ category: string }> = ({ category }) => {
  return (
    <CatContainer>
      <Cat>{category}</Cat>
    </CatContainer>
  );
};
