import React from 'react';
import styled from 'styled-components/native';

const MilestoneContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  /* border: 1px red; */
  margin: 2px 0 2px 0;
`;

const Bullet = styled.Text`
  font-family: 'source-serif-pro';
  font-size: 20px;
  line-height: 25px;
  padding-right: 2px;
  /* border: 1px green; */
`;

const Description = styled.Text`
  font-family: 'source-serif-pro';
  font-size: 20px;
  line-height: 25px;
  padding: 2px;
  /* border: 1px blue; */
  /* overflow: hidden; */
`;

export const Milestone: React.SFC<{ text: string }> = ({ text }) => {
  return (
    <MilestoneContainer>
      <Bullet>&bull;</Bullet>
      <Description>{text}</Description>
    </MilestoneContainer>
  );
};
