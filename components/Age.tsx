import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const AgeContainer = styled.View`
  position: absolute;
  bottom: ${Constants.statusBarHeight + 50};
  max-width: 100%;
  align-self: center;
`;

const Line = styled.View`
  background: black;
  border-radius: 1px;
  height: 2px;
  width: 40%;
  margin: auto;
`;

const Cat = styled.Text`
  font-family: 'averia-serif-libre';
  font-size: 24px;
  padding: 8px;
  overflow: hidden;
`;

export const Age: React.SFC<{ age: string }> = ({ age }) => {
  return (
    <AgeContainer>
      <Line />
      <Cat>{age}</Cat>
    </AgeContainer>
  );
};
