import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as devData from './devMilestones.json';

type Milestone = { age: number; description: string };
type Category = {
  category: string;
  milestones: Milestone[];
};

const data: Category[] = devData as any;

// consts from stove
const { width, height } = Dimensions.get('screen');
const gridX = 5; // WHY 6
const gridY = 12; // WHY 12?
const grid = [...Array(gridX || 0)].map((v, i) => {
  return [...Array(gridY || 0)].map((v, i) => i);
});

const colorForTopic = (
  count: number,
  index: number,
  y: number,
  range: number = 360,
  startAngle: number = 0,
  favourEdges: boolean = false,
) => {
  const saturation = `${((y + 1) / count) * 100}%`;

  const stepValue = range / count;
  const midPoint = range / 2;
  let hueVal: number;
  const lightVal: string = '60%';
  if (range <= 330) {
    hueVal = ((range * index) / (count - 1) + startAngle) % 360;
  } else {
    hueVal = ((range * index) / (count + 1) + startAngle) % 360;
  }

  if (favourEdges) {
    if (hueVal < midPoint) {
      hueVal = hueVal - index * (stepValue / 2);
    } else if (hueVal > midPoint) {
      hueVal = hueVal + (count - 1 - index) * (stepValue / 2);
    }
  }

  return `hsl(${Math.round(hueVal)}, ${saturation}, ${lightVal})`;
};

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          height: height * gridY,
          width: width * gridX,
          flexWrap: 'wrap',
        }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        pagingEnabled
      >
        {grid.map((col, x) => {
          return col.map((row, y) => {
            return (
              <View
                key={`[${x},${y}]`}
                style={[styles.container, { backgroundColor: colorForTopic(gridY, x, y) }]}
              >
                <Text>
                  {`[${x},${y}]`}
                  {JSON.stringify(data[x].category)}
                  {JSON.stringify(data[x].milestones[y])}
                </Text>
              </View>
            );
          });
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
