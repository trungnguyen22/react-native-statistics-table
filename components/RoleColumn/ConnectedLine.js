/* eslint-disable default-case */
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_ROW_HEIGHT } from '../../utils/constants';

export const DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE = 12;
export const DEFAULT_PADDING = 20;
export const DEFAULT_CONTAINER_WIDTH = 80;

const DEFAULT_LINE_COLOR = '#233a95';
const DEFAULT_VERTICAL_LINE_WIDTH = 2;
const DEFAULT_HORIZONTAL_LINE_HEIGHT = 2;

const AbsoluteVerticalLine = ({ style }) => (
  <View
    style={[
      style,
      {
        position: 'absolute',
        width: DEFAULT_VERTICAL_LINE_WIDTH,
        backgroundColor: DEFAULT_LINE_COLOR
      }
    ]}
  />
);

const AbsoluteHorizontalLine = ({ style }) => (
  <View
    style={[
      style,
      {
        position: 'absolute',
        height: DEFAULT_HORIZONTAL_LINE_HEIGHT,
        backgroundColor: DEFAULT_LINE_COLOR
      }
    ]}
  />
);

class ConnectedLine extends PureComponent {
  renderConnectedLine = lineType => {
    switch (lineType) {
      case 0:
        return (
          <AbsoluteVerticalLine
            style={{
              bottom: 0,
              right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE,
              height: DEFAULT_ROW_HEIGHT / 2 - 10
            }}
          />
        );
      case 1: // |-
        return (
          <View style={styles.lineContainer}>
            <AbsoluteVerticalLine
              style={{
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE,
                height: DEFAULT_ROW_HEIGHT
              }}
            />
            <AbsoluteHorizontalLine
              style={{
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                width: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE
              }}
            />
          </View>
        );
      case 2: // |T
        return (
          <View style={styles.lineContainer}>
            <AbsoluteVerticalLine
              style={{
                bottom: 0,
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE + DEFAULT_PADDING,
                height: '100%'
              }}
            />
            <AbsoluteHorizontalLine
              style={{
                top: DEFAULT_ROW_HEIGHT / 2,
                right: 0,
                width: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE + DEFAULT_PADDING
              }}
            />
            <AbsoluteVerticalLine
              style={{
                bottom: 0,
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE,
                height: DEFAULT_ROW_HEIGHT / 2
              }}
            />
          </View>
        );
      case 3: // | |-
        return (
          <View style={styles.lineContainer}>
            <AbsoluteVerticalLine
              style={{
                bottom: 0,
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE + 20,
                height: '100%'
              }}
            />
            <AbsoluteHorizontalLine
              style={{
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                width: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE
              }}
            />
            <AbsoluteVerticalLine
              style={{
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE,
                height: DEFAULT_ROW_HEIGHT
              }}
            />
          </View>
        );
      case 4: // | L
        return (
          <View style={styles.lineContainer}>
            <AbsoluteVerticalLine
              style={{
                position: 'absolute',
                bottom: 0,
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE + DEFAULT_PADDING,
                height: DEFAULT_ROW_HEIGHT
              }}
            />
            <AbsoluteHorizontalLine
              style={{
                position: 'absolute',
                top: DEFAULT_ROW_HEIGHT / 2,
                right: 0,
                width: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE + 2
              }}
            />
            <AbsoluteVerticalLine
              style={{
                position: 'absolute',
                top: 0,
                right: DEFAULT_POSITION_RIGHT_ABSOLUTE_LINE,
                height: DEFAULT_ROW_HEIGHT / 2
              }}
            />
          </View>
        );
    }
  };

  render() {
    const { containerStyle, lineType = 0 } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {this.renderConnectedLine(lineType)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: DEFAULT_CONTAINER_WIDTH,
    height: DEFAULT_ROW_HEIGHT
  },
  lineContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%'
  }
});

export default ConnectedLine;
