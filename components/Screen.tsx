// Third-party imports
import React from 'react';
import styled from 'styled-components/native';

import { Grid } from './Grid';
import { CategoryTitle } from './CategoryTitle';
import { Age } from './Age';
import { calculateAge } from '../Utils';
import { Category } from '../App';

const ScreenContainer = styled.View`
  flex: 1;
`;

export const Screen: React.SFC<{
  state: { x: number; y: number; data: Category[] };
  updateState: (x: number, y: number) => void;
}> = ({ state, updateState }) => {
  return (
    <ScreenContainer>
      <Grid state={state} updateState={updateState} />
      <CategoryTitle category={state.data[state.x].category} />
      <Age age={calculateAge(parseInt(state.data[0].milestones[state.y].age))} />
    </ScreenContainer>
  );
};
