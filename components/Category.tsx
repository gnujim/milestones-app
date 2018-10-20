import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';
import { colorForTopic } from '../Utils';

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
`;

const Cat = styled.Text`
  /* background-color: #fffa; */
  /* background: #fffa; */
  font-family: 'averia-serif-libre';
  font-size: 26px;
  padding: 8px;
  overflow: hidden;
`;
const Test = styled.View`
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
      <Test />
    </CatContainer>
  );
};
