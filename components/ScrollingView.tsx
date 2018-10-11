import React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import devData from '../devMilestones.json';
import { colorForTopic } from '../Utils';

type Category = {
  category: string;
  milestones: { age: number; description: string }[];
};

const data: Category[] = devData;

const { width, height } = Dimensions.get('screen');

const Container = styled.View<{ color: string }>`
  height: ${height};
  width: ${width};
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

const CardContainer = styled.View`
  background: #fff;
  height: 40%;
  width: 60%;
  border-radius: 8px;
  box-shadow: 10px 5px 5px #0002;
`;

export const ScrollingView: React.SFC<{
  state: { x: number; y: number };
  updateState: (x: number, y: number) => void;
}> = props => {
  return (
    <ScrollView
      contentContainerStyle={{
        height: height * data[0].milestones.length,
        width: width * data.length,
        flexWrap: 'wrap',
      }}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      directionalLockEnabled
      pagingEnabled
      onScroll={event => {
        const { x, y } = event.nativeEvent.contentOffset;
        props.updateState(x, y);
      }}
      scrollEventThrottle={100}>
      {data.map((col, x) => {
        return col.milestones.map((row, y) => {
          return (
            <Container key={y} color={colorForTopic(col.milestones.length, x, y)}>
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
