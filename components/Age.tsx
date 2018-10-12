import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const AgeContainer = styled.View`
  position: absolute;
  /* top: ${Constants.statusBarHeight + 64}; */
  bottom: ${Constants.statusBarHeight};
  left: 0;
  right: 0;
  height: 64;
  /* width: 64; */
  align-items: center;
  justify-content: center;
  border: red 1px;
`;

const Cat = styled.Text`
  /* background-color: #fffa; */
  /* background: #fffa; */
  border-radius: 8;
  padding: 8px;
  overflow: hidden;
`;

export const Age: React.SFC<{ age: string }> = ({ age }) => {
  return (
    <AgeContainer>
      <Cat>{age}</Cat>
    </AgeContainer>
  );
};
