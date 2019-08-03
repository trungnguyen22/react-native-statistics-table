import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_VALUE_CELL_WIDTH,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BORDER_COLOR,
  DEFAULT_MIN_ROW_HEIGHT
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
  renderChildHeaderTitle = (rowHeight, childHeader) => {
    return (
      <View style={{ ...styles.childHeaderContainer, height: rowHeight / 2 }}>
        <Text
          style={{
            ...styles.childHeaderLabel,
            fontSize: rowHeight / 3.75,
            color: childHeader.colorType
          }}
        >
          {childHeader.label}
        </Text>
      </View>
    );
  };

  renderColumnValue = (rowHeight, values) => {
    return values.map((cell, index) => {
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : 'white';
      return (
        <ValueCell
          key={index}
          rowHeight={rowHeight}
          containerStyle={{ backgroundColor: backgroundColor }}
          cell={cell}
        />
      );
    });
  };

  renderColumn = (rowHeight, eachColumn, index) => {
    return (
      <View key={index} style={{ flex: 1 }}>
        {this.renderChildHeaderTitle(rowHeight, eachColumn)}
        {this.renderColumnValue(rowHeight, eachColumn.values, index)}
      </View>
    );
  };

  renderColumns = (rowHeight, dataSource) => {
    return (
      <View style={styles.columnContainer}>
        {dataSource.children.map((column, index) => {
          return this.renderColumn(rowHeight, column, index);
        })}
      </View>
    );
  };

  renderParentHeaderTitle = (rowHeight, dataSource) => {
    return (
      <View style={{ ...styles.groupHeaderContainer, height: rowHeight / 2 }}>
        <Text style={{ ...styles.parentHeaderLabel, fontSize: rowHeight / 3.75 }}>
          {dataSource.label}
        </Text>
      </View>
    );
  };

  renderRightPaddingColumn = (rowHeight, dataSource) => {
    const fakeArray = Array.from({ length: dataSource.children[0].values.length + 1 });
    return fakeArray.map((_, index) => {
      const backgroundColor = index % 2 === 0 ? '#f5f5f5' : '#ffffff';
      return (
        <View
          key={index}
          style={{
            height: index === 0 ? rowHeight + 0.75 : rowHeight, // workaround
            width: 17,
            backgroundColor: backgroundColor
          }}
        />
      );
    });
  };

  render() {
    const { rowHeight, containerStyle, dataSource } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...styles.container, ...containerStyle }}>
          {this.renderParentHeaderTitle(rowHeight, dataSource)}
          {this.renderColumns(rowHeight, dataSource)}
        </View>
        <View style={{}}>{this.renderRightPaddingColumn(rowHeight, dataSource)}</View>
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
    minHeight: DEFAULT_MIN_ROW_HEIGHT / 2,
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
    minHeight: DEFAULT_MIN_ROW_HEIGHT / 2,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderColor: DEFAULT_BORDER_COLOR,
    justifyContent: 'center',
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
