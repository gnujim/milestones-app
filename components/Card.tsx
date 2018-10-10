// Third-party imports
import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  background: #fff;
  height: 200px;
  width: 100px;
  border-radius: 8px;
  box-shadow: 10px 5px 5px #0002;
`;

const CardText = styled.Text``;

export const Card: React.SFC<{}> = ({ children }) => {
  return (
    <CardContainer>
      <CardText>{children}</CardText>
    </CardContainer>
  );
};
