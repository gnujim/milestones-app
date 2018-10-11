import * as React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import devData from './devMilestones.json';
import { ScreenContainer } from './components/ScreenContainer';

// this is type of cat

// STYLED COMPONENTS
// wut is screencontainer vs container
// const ScreenContainer = styled.View`
//   flex: 1;
// `;

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  }; // you can initialize state here without constructor

  private updateState = (x: number, y: number) => {
    // we don't need to feed in width and height here, since we can just get it from Dimensions
    const dimensions = Dimensions.get('screen');
    const { width, height } = dimensions;

    this.setState({
      x: Math.round(x / width),
      y: Math.round(y / height),
    });
  };

  render() {
    return <ScreenContainer state={this.state} updateState={this.updateState} />;
  }
}
