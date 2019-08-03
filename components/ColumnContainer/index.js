import React, { PureComponent } from 'react';
import { View } from 'react-native';
import GroupColumn from './GroupColumn';

class ValueColumnContainer extends PureComponent {
  renderGroupColumns = (rowHeight, dataSource) => {
    return dataSource.map((itemGroupHeader, index) => {
      return <GroupColumn key={index} rowHeight={rowHeight} dataSource={itemGroupHeader} />;
    });
  };

  render() {
    const { rowHeight, dataSource } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>{this.renderGroupColumns(rowHeight, dataSource)}</View>
    );
  }
}

export default ValueColumnContainer;
