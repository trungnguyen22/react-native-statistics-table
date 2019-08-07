import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DEFAULT_MIN_ROW_HEIGHT, DEFAULT_ROLE_ROW_WIDTH } from '../../utils/constants';
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

  renderTitleLabel = (item, rowHeight) => {
    const titleFontSize = rowHeight / 3.75;
    const textColor = item.isShownSeeMore && !item.isExpand ? '#00bc00' : '#24253d';
    const textStyle = { fontSize: titleFontSize, color: textColor };
    return (
      <Text numberOfLines={1} ellipsizeMode="middle" style={{ ...styles.titleText, ...textStyle }}>
        {item.title}
      </Text>
    );
  };

  renderArrowIcon = rowHeight => (
    <Image
      style={{ marginTop: 3, width: rowHeight / 3.333, height: rowHeight / 3.333 }}
      source={iconArrow}
    />
  );

  renderRowTitle = (item, rowHeight, onSeeDetailsButtonPress) => {
    const isShownIconArrow = item.isShownSeeMore && !item.isExpand;
    const canTouch = !(item.isShownSeeMore && !item.isExpand);
    return (
      <TouchableOpacity
        disabled={canTouch}
        onPress={() => {
          onSeeDetailsButtonPress(item);
        }}
        style={{ ...styles.titleContainer }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {this.renderTitleLabel(item, rowHeight)}
          {isShownIconArrow && this.renderArrowIcon(rowHeight)}
        </View>
      </TouchableOpacity>
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
    width: DEFAULT_ROLE_ROW_WIDTH,
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
