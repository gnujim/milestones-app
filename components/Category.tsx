import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';
import { colorForTopic } from '../Utils';

const CatContainer = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight + 50};
  max-width: 100%;
  align-self: center;
`;

const Cat = styled.Text`
  font-family: 'averia-serif-libre';
  font-size: 26px;
  padding: 8px;
  text-align: center;
  overflow: hidden;
`;
const Line = styled.View`
  background: black;
  border-radius: 1px;
  height: 2px;
  width: 40%;
  margin: auto;
`;

export const Category: React.SFC<{ category: string }> = ({ category }) => {
  return (
    <CatContainer>
      <Cat>{category}</Cat>
      <Line />
    </CatContainer>
  );
};
