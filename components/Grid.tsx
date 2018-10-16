import React from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import chroma from 'chroma-js';

import { colorForTopic } from '../Utils';
import { MilestoneCategory } from '../App';

const { width, height } = Dimensions.get('screen');

const Container = styled.View<{ color: string }>`
  height: ${height};
  width: ${width};
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

const CardContainer = styled.View`
  background: #ffffff59;
  height: 40%;
  width: 60%;
  border-radius: 8px;
  justify-content: center;
`;

const CardText = styled.Text``;

export const Grid: React.SFC<{
  state: { x: number; y: number; data: MilestoneCategory[] };
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
            <Container key={y} color={colors}>
              <CardContainer>
                <Text>{row.description}</Text>
                <Text>
                  {x},{y}
                </Text>
              </CardContainer>
            </Container>
          );
        });
      })}
    </ScrollView>
  );
};

// const Container: React.SFC<{ key: number; color: string;}>
// colorForTopic(col.milestones.length, x, y)
