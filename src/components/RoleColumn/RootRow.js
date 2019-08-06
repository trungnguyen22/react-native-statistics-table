import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DEFAULT_MIN_ROW_HEIGHT } from '../../utils/constants';
import ConnectedLine from './ConnectedLine';
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

const expandedIcon = require('./img/ic_expand.png');
const collapsedIcon = require('./img/ic_collapse.png');

class RootRow extends PureComponent {
  renderExpandCollapseButton = (item, rowHeight, leftIcon, onLeftIconPress) => (
    <TouchableOpacity
      onPress={() => {
        onLeftIconPress(item);
      }}
    >
      <Image style={{ width: rowHeight / 3.333, height: rowHeight / 3.333 }} source={leftIcon} />
    </TouchableOpacity>
  );

  renderRowTitle = (item, rowHeight) => {
    const fontSize = rowHeight / 3.75;
    return (
      <View style={{ ...styles.titleContainer }}>
        <Text style={{ ...styles.titleText, fontSize }}>{item.title}</Text>
      </View>
    );
  };

  render() {
    const { item, rowHeight, backgroundColor, containerStyle, onLeftIconPress } = this.props;
    const leftIcon = item.isExpand ? collapsedIcon : expandedIcon;
    return (
      <View
        style={{
          ...styles.container,
          ...containerStyle,
          height: rowHeight,
          backgroundColor
        }}
      >
        {item.isExpand ? (
          <ConnectedLine
            rowHeight={rowHeight}
            containerStyle={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}
            lineType={0}
          />
        ) : null}
        {this.renderExpandCollapseButton(item, rowHeight, leftIcon, onLeftIconPress)}
        {this.renderRowTitle(item, rowHeight)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: DEFAULT_MIN_ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 36
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: 36
  },
  titleText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0,
    color: '#39b818'
  }
});

export default RootRow;
