import * as React from 'react';
import { Dimensions, Modal, Text, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import styled from 'styled-components/native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import devData from './devMilestones.json';
import { Grid } from './components/Grid';
import { Category } from './components/Category';
import { Age } from './components/Age';
import { calculateAge } from './Utils';
import { InfoModal } from './components/InfoModal';

export type CategoryType = {
  category: string;
  milestones: { age: string; description: string }[];
};

const data: CategoryType[] = devData;

const Screen = styled.View`
  flex: 1;
`;

// const Info = styled.View`
//   position: absolute;
//   top: ${Constants.statusBarHeight + 10};
//   height: 200px;
//   z-index: 2;
//   width: 80%;
//   /* background: white; */
// `;

const OpenInfo = styled.TouchableHighlight`
  background: white;
  border-radius: 50%;
  height: 30px;
  position: absolute;
  bottom: ${Constants.statusBarHeight + 20};
  right: 40px;
  align-self: center;
  width: 30px;
`;

const OpenInfoIcon = styled.Text`
  font-family: 'source-serif-pro';
  font-size: 24px;
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    data,
    modalVisible: false,
    fontLoaded: false,
  }; // you can initialize state here without constructor

  // MODAL STATE
  private setModalVisible = (visible: boolean) => {
    this.setState({ modalVisible: visible });
  };

  // LOAD FONTS
  async componentDidMount() {
    await Font.loadAsync({
      'source-serif-pro': require('./assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
      'averia-serif-libre': require('./assets/fonts/Averia_Serif_Libre/AveriaSerifLibre-Regular.ttf'),
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
        <InfoModal state={this.state} setModalVisible={this.setModalVisible} />
        <Grid state={this.state} updateState={this.updateState} />
        <Category category={this.state.data[this.state.x].category} />
        <Age age={calculateAge(parseInt(this.state.data[0].milestones[this.state.y].age))} />
        <OpenInfo
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <OpenInfoIcon>i</OpenInfoIcon>
        </OpenInfo>
      </Screen>
    ) : null;
  }
}

// const RootStack = createStackNavigator({
//   Info: {
//     screen: Info,
//   },
// });
