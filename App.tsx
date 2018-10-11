import * as React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Constants } from 'expo';
import devData from './devMilestones.json';
// import { Card } from './components/Card.js';
import { colorForTopic } from './Utils';

// this is type of cat
type Category = {
  category: string;
  milestones: { age: number; description: string }[];
};

const data: Category[] = devData;

// consts from stove
const { width, height } = Dimensions.get('screen');

// STYLED COMPONENTS
// wut is screencontainer vs container
const ScreenContainer = styled.View`
  flex: 1;
`;

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
  background-color: #fffa;
  background: #fffa;
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

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  };
  render() {
    return (
      <ScreenContainer>
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
            this.setState({
              x: Math.round(x / width),
              y: Math.round(y / height),
            });
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
        <CatContainer>
          <Cat>{data[this.state.x].category}</Cat>
        </CatContainer>
        <AgeContainer>
          <Cat>{data[0].milestones[this.state.y].age}</Cat>
        </AgeContainer>
      </ScreenContainer>
    );
  }
}
