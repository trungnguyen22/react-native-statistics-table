import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DEFAULT_ROW_HEIGHT } from '../../utils/constants';
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

class RootRow extends PureComponent {
  render() {
    const { item, containerStyle } = this.props;
    const leftIconImageSource = item.isExpand
      ? require('./img/ic_collapse.png')
      : require('./img/ic_expand.png');
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {item.isExpand ? (
          <ConnectedLine
            containerStyle={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}
            lineType={0}
          />
        ) : null}
        <Image source={leftIconImageSource} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
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
    paddingLeft: 36,
  },
  titleContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center'
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
