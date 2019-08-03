import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import RootRow from './RootRow';
import LeafRow from './LeafRow';
import { DEFAULT_BORDER_WIDTH, DEFAULT_BORDER_COLOR } from '../../utils/constants';

export class RoleColumn extends PureComponent {
  renderRoleRows = (rowHeight, dataSource) => {
    return dataSource.map((item, index) => {
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : '#ffffff';
      return item.level === 0 ? (
        <RootRow key={index} rowHeight={rowHeight} backgroundColor={backgroundColor} item={item} />
      ) : (
        <LeafRow key={index} rowHeight={rowHeight} backgroundColor={backgroundColor} item={item} />
      );
    });
  };

  render() {
    const { rowHeight, containerStyle, dataSource } = this.props;
    return (
      <View style={{ ...styles.container, marginTop: rowHeight, ...containerStyle }}>
        {this.renderRoleRows(rowHeight, dataSource)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: DEFAULT_BORDER_WIDTH,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderLeftWidth: DEFAULT_BORDER_WIDTH,
    borderLeftColor: DEFAULT_BORDER_COLOR,
    borderTopColor: DEFAULT_BORDER_COLOR,
    borderBottomColor: DEFAULT_BORDER_COLOR
  }
});

export default RoleColumn;
