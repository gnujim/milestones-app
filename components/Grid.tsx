import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colorForTopic, milestoneSplit } from '../Utils';
import { CategoryType } from '../App';
import { Milestone } from './Milestone';

const { width, height } = Dimensions.get('screen');

const Container = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  height: ${height};
  width: ${width};
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.View`
  background-color: #fdfdfd;
  border: 2px black;
  border-radius: 5px;
  height: 40%;
  width: 80%;
  justify-content: center;
  padding: 12px;
`;

export const Grid: React.SFC<{
  state: { x: number; y: number; data: CategoryType[] };
  updateState: (x: number, y: number) => void;
}> = ({ state, updateState }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        height: height * state.data[0].milestones.length,
        width: width * state.data.length,
        flexWrap: 'wrap',
      }}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      directionalLockEnabled
      pagingEnabled
      onScroll={event => {
        const { x, y } = event.nativeEvent.contentOffset;
        updateState(x, y);
      }}
      scrollEventThrottle={100}>
      {state.data.map((col, x) => {
        return col.milestones.map((row, y) => {
          const colors = colorForTopic(col.milestones.length, x, y);
          return (
            <Container key={y} color={colors.hex()}>
              <CardContainer>
                {milestoneSplit(row.description).map(bullet => {
                  return <Milestone key={bullet} text={bullet} />;
                })}
              </CardContainer>
            </Container>
          );
        });
      })}
    </ScrollView>
  );
};
