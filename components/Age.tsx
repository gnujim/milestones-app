import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const AgeContainer = styled.View`
  position: absolute;
  /* top: ${Constants.statusBarHeight + 64}; */
  bottom: ${Constants.statusBarHeight + 100};
  /* left: 0;
  right: 0; */
  max-width: 100%;
  align-self: center;
  /* height: 20%; */
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

export const Age: React.SFC<{ age: string }> = ({ age }) => {
  return (
    <AgeContainer>
      <Cat>{age}</Cat>
    </AgeContainer>
  );
};
