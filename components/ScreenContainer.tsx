// Third-party imports
import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

import { Grid } from './Grid';
import { Category } from '../App';

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

const calculateAge = (age: number) => {
  return age > 18 ? `${age / 12} yrs` : `${age} mos`;
};

// Could maybe rename this? I dunno....
export const ScreenContainer: React.SFC<{
  state: { x: number; y: number; data: Category[] };
  updateState: (x: number, y: number) => void;
}> = ({ state, updateState }) => {
  return (
    <ScreenWrapper>
      <Grid state={state} updateState={updateState} />
      <Category category={state.data[state.x].category} />
      <Age age={calculateAge(state.data[0].milestones[state.y].age)} />
    </ScreenWrapper>
  );
};

const Category: React.SFC<{ category: string }> = ({ category }) => {
  return (
    <CatContainer>
      <Cat>{category}</Cat>
    </CatContainer>
  );
};

const Age: React.SFC<{ age: string }> = ({ age }) => {
  return (
    <AgeContainer>
      <Cat>{age}</Cat>
    </AgeContainer>
  );
};
