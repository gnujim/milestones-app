import * as React from 'react';
import { Dimensions } from 'react-native';
import { Font } from 'expo';
import styled from 'styled-components/native';

import devData from './devMilestones.json';
import { Grid } from './components/Grid';
import { Category } from './components/Category';
import { Age } from './components/Age';
import { calculateAge } from './Utils';

export type CategoryType = {
  category: string;
  milestones: { age: string; description: string }[];
};

const data: CategoryType[] = devData;

const Screen = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    data,
    fontLoaded: false,
  }; // you can initialize state here without constructor

  // LOAD FONTS
  async componentDidMount() {
    await Font.loadAsync({
      'playfair-display': require('./assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf'),
      'playfair-display-bold': require('./assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf'),
      'source-serif-pro': require('./assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
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
    return this.state.fontLoaded ? (
      <Screen>
        <Grid state={this.state} updateState={this.updateState} />
        <Category category={this.state.data[this.state.x].category} />
        <Age age={calculateAge(parseInt(this.state.data[0].milestones[this.state.y].age))} />
      </Screen>
    ) : null;
  }
}
