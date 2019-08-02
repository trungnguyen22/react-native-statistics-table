import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_VALUE_CELL_WIDTH,
  DEFAULT_BORDER_WIDTH
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
//       iconType: 'down'
//     },
//   ]
// },

class GroupColumn extends PureComponent {
  renderChildHeaderTitle = childHeader => (
    <View style={styles.childHeaderContainer}>
      <Text style={styles.childHeaderLabel}>{childHeader.label}</Text>
    </View>
  );

  renderColumnValue = values => {
    return values.map((cell, index) => {
      const backgroundColor = index % 2 === 0 ? '#f5f5f5' : 'white';
      return (
        <ValueCell containerStyle={{ backgroundColor: backgroundColor }} key={index} cell={cell} />
      );
    });
  };

  renderColumn = eachColumn => {
    return (
      <View>
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

  render() {
    const { containerStyle, dataSource } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {this.renderParentHeaderTitle(dataSource)}
        {this.renderColumns(dataSource)}
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
    borderTopColor: 'gray',
    borderLeftColor: 'gray',
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    marginRight: 16
  },
  groupHeaderContainer: {
    height: DEFAULT_ROW_HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center'
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
    height: DEFAULT_ROW_HEIGHT / 2,
    alignItems: 'center',
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderColor: 'gray'
  },
  childHeaderLabel: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#39b818',
    paddingLeft: 6,
    paddingRight: 6
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GroupColumn;
