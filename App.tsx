import * as React from 'react';
import { Dimensions } from 'react-native';
import { Font } from 'expo';
import styled from 'styled-components/native';

import devData from './devMilestones.json';
import { Screen } from './components/Screen';

export type Category = {
  category: string;
  milestones: { age: number; description: string }[];
};

const data: Category[] = devData;

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    data,
    fontLoaded: false,
  }; // you can initialize state here without constructor

  async componentDidMount() {
    await Font.loadAsync({
      'playfair-display': require('./assets/Playfair_Display/PlayfairDisplay-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  private updateState = (x: number, y: number) => {
    const dimensions = Dimensions.get('screen');
    const { width, height } = dimensions;

    this.setState({
      x: Math.round(x / width),
      y: Math.round(y / height),
    });
  };

  render() {
    return <Screen state={this.state} updateState={this.updateState} />;
  }
}
