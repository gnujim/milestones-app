// Third-party imports
import React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Constants } from 'expo';

import devData from '../devMilestones.json';
import { ScrollingView } from '../components/ScrollingView';

type Category = {
  category: string;
  milestones: { age: number; description: string }[];
};

const data: Category[] = devData;

// consts from stove
const { width, height } = Dimensions.get('screen');

const ScreenWrapper = styled.View`
  flex: 1;
`;

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
  padding: 8px;
  overflow: hidden;
`;

const AgeContainer = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight + 64};
  bottom: 0;
  left: 0;
  width: 64;
  align-items: center;
  justify-content: center;
  border: red 1px;
`;

// Could maybe rename this? I dunno....
export const ScreenContainer: React.SFC<{
  state: { x: number; y: number };
  updateState: (x: number, y: number) => void;
}> = props => {
  return (
    <ScreenWrapper>
      <ScrollingView state={props.state} updateState={props.updateState} />
      <CatContainer>
        <Cat>{data[props.state.x].category}</Cat>
      </CatContainer>
      <AgeContainer>
        <Cat>{data[0].milestones[props.state.y].age}</Cat>
      </AgeContainer>
    </ScreenWrapper>
  );
};
