import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DEFAULT_ROW_HEIGHT } from '../../utils/constants';
import ConnectedLine, { POSITION_RIGHT, DEFAULT_CONTAINER_WIDTH } from './ConnectedLine';

/**
 {
    "title": "Harrell Gutierrez",
    "isExpand": false,
    "level": 0,
    "isShownSeeMore": false,
    "isBeginning": true,
    "isFinal": false
  },
 */

class LeafRow extends PureComponent {
  renderSeeDetailsButton = () => (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Text style={{ ...styles.clickableText, marginLeft: 10 }}>{'Chi tiết'}</Text>
      <Image source={require('./img/ic_next.png')} />
    </TouchableOpacity>
  );

  getConnectedLineType = ({ level, isBeginning, isFinal }) => {
    switch (level) {
      case 1:
        return 1;
      case 2:
        if (isBeginning) {
          return 2;
        }
        if (isFinal) {
          return 4;
        }
        return 3;
      default:
        return -1;
    }
  };

  render() {
    const { containerStyle, backgroundColor, item } = this.props;

    const connectedLineType = this.getConnectedLineType(item);
    const connectedLineWidth =
      item.level === 2 ? DEFAULT_CONTAINER_WIDTH + POSITION_RIGHT : DEFAULT_CONTAINER_WIDTH;

    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        <ConnectedLine
          containerStyle={{ width: connectedLineWidth }}
          lineType={connectedLineType}
        />
        <View style={{ ...styles.titleContainer, ...backgroundColor }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleText}>{item.title}</Text>
            {item.isShownSeeMore ? this.renderSeeDetailsButton() : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: DEFAULT_ROW_HEIGHT,
    maxHeight: DEFAULT_ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 6
    // backgroundColor: 'gray',
  },
  titleText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#24253d'
  },
  clickableText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#00bc00'
  }
});

export default LeafRow;
