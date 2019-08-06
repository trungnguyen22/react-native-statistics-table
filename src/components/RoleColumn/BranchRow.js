import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DEFAULT_MIN_ROW_HEIGHT } from '../../utils/constants';
import ConnectedLine, { DEFAULT_CONTAINER_WIDTH, DEFAULT_PADDING } from './ConnectedLine';

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

const iconArrow = require('./img/ic_next.png');

class BranchRow extends PureComponent {
  renderSeeDetailsButton = (item, rowHeight, onSeeDetailsButtonPress) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
      onPress={() => {
        onSeeDetailsButtonPress(item);
      }}
    >
      <Text style={{ ...styles.clickableText, fontSize: rowHeight / 3.75, marginLeft: 10 }}>
        {'Chi tiết'}
      </Text>
      <Image style={{ width: rowHeight / 3.333, height: rowHeight / 3.333 }} source={iconArrow} />
    </TouchableOpacity>
  );

  getConnectedLineType = ({ level, isExpand, isBeginning, isFinal }) => {
    switch (level) {
      case 1:
        if (isExpand) return 5;
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

  renderRowTitle = (item, rowHeight, onSeeDetailsButtonPress) => {
    const fontSize = rowHeight / 3.75;
    return (
      <View style={{ ...styles.titleContainer }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...styles.titleText, fontSize }}>{item.title}</Text>
          {item.isShownSeeMore && !item.isExpand
            ? this.renderSeeDetailsButton(item, rowHeight, onSeeDetailsButtonPress)
            : null}
        </View>
      </View>
    );
  };

  render() {
    const {
      containerStyle,
      rowHeight,
      backgroundColor,
      item,
      onSeeDetailsButtonPress
    } = this.props;
    const connectedLineType = this.getConnectedLineType(item);
    const connectedLineContainerWidth =
      item.level === 2 ? DEFAULT_CONTAINER_WIDTH + DEFAULT_PADDING : DEFAULT_CONTAINER_WIDTH;
    return (
      <View
        style={{
          ...styles.container,
          ...containerStyle,
          height: rowHeight,
          backgroundColor
        }}
      >
        <ConnectedLine
          rowHeight={rowHeight}
          containerStyle={{ width: connectedLineContainerWidth }}
          lineType={connectedLineType}
        />
        {this.renderRowTitle(item, rowHeight, onSeeDetailsButtonPress)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: DEFAULT_MIN_ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 36
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

export default BranchRow;
