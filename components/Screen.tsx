// Third-party imports
import React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

import { Grid } from './Grid';
import { Category } from './Category'; //rename?
import { Age } from './Age';
import { Category } from '../App';

const ScreenContainer = styled.View`
  flex: 1;
`;

const calculateAge = (age: number) => {
  return age > 18 ? `${age / 12} yrs` : `${age} mos`;
};

export const Screen: React.SFC<{
  state: { x: number; y: number; data: Category[] };
  updateState: (x: number, y: number) => void;
}> = ({ state, updateState }) => {
  return (
    <ScreenContainer>
      <Grid state={state} updateState={updateState} />
      <Category category={state.data[state.x].category} />
      <Age age={calculateAge(state.data[0].milestones[state.y].age)} />
    </ScreenContainer>
  );
};
