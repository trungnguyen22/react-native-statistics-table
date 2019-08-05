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
//     {...}
//   ]
// },

class GroupColumn extends PureComponent {
  isHavingChildrenTitle = dataSource => {
    const { children } = dataSource;
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].label !== '') return true;
    }
    return false;
  };

  // ----------------------------------------------------------
  // RENDER METHODS
  // ----------------------------------------------------------

  renderChildHeaderTitle = (rowHeight, itemColumn) => {
    return (
      <View style={{ ...styles.childHeaderContainer, height: rowHeight / 2 }}>
        <Text
          style={{
            ...styles.childHeaderLabel,
            fontSize: rowHeight / 3.75,
            color: itemColumn.colorType
          }}
        >
          {itemColumn.label}
        </Text>
      </View>
    );
  };

  renderColumnValue = (rowHeight, values, isHavingChildrenTitle) => {
    const alignItemsStyle = isHavingChildrenTitle
      ? { alignItems: 'flex-end' }
      : { alignItems: 'center' };
    return values.map((cell, index) => {
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : '#ffffff';
      return (
        <ValueCell
          key={index}
          rowHeight={rowHeight}
          containerStyle={{ backgroundColor: backgroundColor, ...alignItemsStyle }}
          cell={cell}
        />
      );
    });
  };

  renderColumn = (index, rowHeight, itemColumn, isHavingChildrenTitle) => {
    return (
      <View key={index} style={{ flex: 1 }}>
        {isHavingChildrenTitle && this.renderChildHeaderTitle(rowHeight, itemColumn)}
        {this.renderColumnValue(rowHeight, itemColumn.values, isHavingChildrenTitle)}
      </View>
    );
  };

  renderParentHeaderTitle = (rowHeight, dataSource, isHavingChildrenTitle) => {
    const height = isHavingChildrenTitle ? rowHeight / 2 : rowHeight;
    const borderBottomStyle = isHavingChildrenTitle
      ? {}
      : { borderBottomWidth: DEFAULT_BORDER_WIDTH, borderBottomColor: DEFAULT_BORDER_COLOR };
    return (
      <View style={{ ...styles.groupHeaderContainer, height, ...borderBottomStyle }}>
        <Text style={{ ...styles.parentHeaderLabel, fontSize: rowHeight / 5 }}>
          {dataSource.label}
        </Text>
      </View>
    );
  };

  renderColumns = (rowHeight, dataSource, isHavingChildrenTitle) => {
    return (
      <View style={styles.columnContainer}>
        {dataSource.children.map((itemColumn, index) => {
          return this.renderColumn(index, rowHeight, itemColumn, isHavingChildrenTitle);
        })}
      </View>
    );
  };

  renderRightPaddingColumn = (rowHeight, dataSource) => {
    const numberOfRows = dataSource.children[0].values.length;
    const arr = Array.from({ length: numberOfRows });
    return arr.map((_, index) => {
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : '#ffffff';
      return (
        <View
          key={index}
          style={{
            height: index === 0 ? rowHeight + 0.75 : rowHeight,
            width: rowHeight / 3.5,
            backgroundColor: backgroundColor
          }}
        />
      );
    });
  };

  render() {
    const { rowHeight, containerStyle, dataSource } = this.props;
    const isHavingChildrenTitle = this.isHavingChildrenTitle(dataSource);
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...styles.container, ...containerStyle }}>
          {this.renderParentHeaderTitle(rowHeight, dataSource, isHavingChildrenTitle)}
          {this.renderColumns(rowHeight, dataSource, isHavingChildrenTitle)}
        </View>
        <View style={{ marginTop: rowHeight }}>
          {this.renderRightPaddingColumn(rowHeight, dataSource)}
        </View>
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
    alignItems: 'flex-end',
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 24
  },
  childHeaderLabel: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center'
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default GroupColumn;
