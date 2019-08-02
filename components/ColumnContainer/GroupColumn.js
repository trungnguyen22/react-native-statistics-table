import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_VALUE_CELL_WIDTH,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BORDER_COLOR
} from '../../utils/constants';
import ValueCell from './ValueCell';

// Example Model:
// groupHeader
// {
//   label: 'Holcomb Reese',
//   children: [ // child header of each column
//     {
//       label: 'Joni Gilliam',
//       colorType: 'green',
//       iconType: 'down'
//       values: [
//          {
//            rawValue: '1,232,000,000,000',
//            calculatedValue: 34,
//            colorType: 'red',
//            iconType: 'down',
//            unit: '%'
//          },
//          ...
//       ]
//     },
//     {
//       label: 'Joni Gilliam',
//       colorType: 'green',
//       iconType: 'down',
//       values: [......]
//     },
//   ]
// },

class GroupColumn extends PureComponent {
  renderChildHeaderTitle = childHeader => {
    return (
      <View style={styles.childHeaderContainer}>
        <Text style={{ ...styles.childHeaderLabel, color: childHeader.colorType }}>
          {childHeader.label}
        </Text>
      </View>
    );
  };

  renderColumnValue = values => {
    return values.map((cell, index) => {
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : 'white';
      return (
        <ValueCell key={index} containerStyle={{ backgroundColor: backgroundColor }} cell={cell} />
      );
    });
  };

  renderColumn = eachColumn => {
    return (
      <View style={{ flex: 1 }}>
        {this.renderChildHeaderTitle(eachColumn)}
        {this.renderColumnValue(eachColumn.values)}
      </View>
    );
  };

  renderColumns = dataSource => {
    return (
      <View style={styles.columnContainer}>
        {dataSource.children.map(column => {
          return this.renderColumn(column);
        })}
      </View>
    );
  };

  renderParentHeaderTitle = dataSource => {
    return (
      <View style={styles.groupHeaderContainer}>
        <Text style={styles.parentHeaderLabel}>{dataSource.label}</Text>
      </View>
    );
  };

  renderRightPaddingColumn = dataSource => {
    const fakeArray = Array.from({ length: dataSource.children[0].values.length + 1 });
    return fakeArray.map((_, index) => {
      const backgroundColor = index % 2 === 0 ? '#f5f5f5' : 'white';
      return (
        <View
          style={{
            height: index === 0 ? DEFAULT_ROW_HEIGHT + 0.75 : DEFAULT_ROW_HEIGHT, // workaround
            width: 17,
            backgroundColor: backgroundColor
          }}
        />
      );
    });
  };

  render() {
    const { containerStyle, dataSource } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...styles.container, ...containerStyle }}>
          {this.renderParentHeaderTitle(dataSource)}
          {this.renderColumns(dataSource)}
        </View>
        <View style={{}}>{this.renderRightPaddingColumn(dataSource)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: DEFAULT_BORDER_WIDTH,
    borderLeftWidth: DEFAULT_BORDER_WIDTH,
    borderRightWidth: DEFAULT_BORDER_WIDTH,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderColor: DEFAULT_BORDER_COLOR
  },
  groupHeaderContainer: {
    height: DEFAULT_ROW_HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  parentHeaderLabel: {
    opacity: 0.6,
    fontFamily: 'HelveticaNeue',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#24253d',
    marginLeft: 6,
    marginRight: 6
  },
  childHeaderContainer: {
    flex: 1,
    height: DEFAULT_ROW_HEIGHT / 2,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderColor: DEFAULT_BORDER_COLOR,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 24
  },
  childHeaderLabel: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    paddingLeft: 6,
    paddingRight: 6
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default GroupColumn;
