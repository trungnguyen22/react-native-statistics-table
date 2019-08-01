import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_ROW_HEIGHT } from '../../utils/constants';

export const POSITION_RIGHT = 12;
export const DEFAULT_CONTAINER_WIDTH = 80;

class ConnectedLine extends PureComponent {
  renderConnectedLine = lineType => {
    switch (lineType) {
      case 0:
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: POSITION_RIGHT,
              height: 19,
              width: 2,
              backgroundColor: '#233a95'
            }}
          />
        );
      case 1:
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT,
                height: '100%',
                width: 2,
                backgroundColor: '#233a95'
              }}
            />

            <View
              style={{
                position: 'absolute',
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                height: 2,
                width: 12,
                backgroundColor: '#233a95'
              }}
            />
          </View>
        );
      case 2:
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT * 2,
                height: '100%',
                width: 2,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                height: 2,
                width: POSITION_RIGHT * 2,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT,
                height: DEFAULT_CONTAINER_WIDTH / 2.5,
                width: 2,
                backgroundColor: '#233a95'
              }}
            />
          </View>
        );
      case 3:
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT * 2,
                height: '100%',
                width: 2,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                height: 2,
                width: POSITION_RIGHT,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT,
                height: DEFAULT_CONTAINER_WIDTH,
                width: 2,
                backgroundColor: '#233a95'
              }}
            />
          </View>
        );
      case 4:
      case 3:
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: POSITION_RIGHT * 2,
                height: '100%',
                width: 2,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: DEFAULT_ROW_HEIGHT / 2.125,
                right: 0,
                height: 2,
                width: POSITION_RIGHT,
                backgroundColor: '#233a95'
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: POSITION_RIGHT,
                height: DEFAULT_CONTAINER_WIDTH / (2.5 + 0.125),
                width: 2,
                backgroundColor: '#233a95'
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
    height: DEFAULT_ROW_HEIGHT,
    // backgroundColor: 'lightblue'
  }
});

export default ConnectedLine;
