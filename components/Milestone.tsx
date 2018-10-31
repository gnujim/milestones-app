import React from 'react';
import styled from 'styled-components/native';

const MilestoneContainer = styled.View`
  flex-direction: row;
  margin: 2px 0 2px 0;
`;

const Bullet = styled.Text`
  font-family: 'source-serif-pro';
  font-size: 20px;
  line-height: 25px;
  padding-right: 2px;
`;

const Description = styled.Text`
  font-family: 'source-serif-pro';
  font-size: 20px;
  line-height: 25px;
  padding: 2px;
`;

export const Milestone: React.SFC<{ text: string }> = ({ text }) => {
  return (
    <MilestoneContainer>
      <Bullet>&bull;</Bullet>
      <Description>{text}</Description>
    </MilestoneContainer>
  );
};
