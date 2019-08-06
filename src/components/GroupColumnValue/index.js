import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import GroupColumnValue from './GroupColumnValue';

class GroupColumnValueContainer extends PureComponent {
  renderGroupColumns = ({ item }) => {
    const { rowHeight } = this.props;
    return <GroupColumnValue rowHeight={rowHeight} dataSource={item} />;
  };

  render() {
    const { dataSource } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          horizontal
          bounces={false}
          data={dataSource}
          extraData={this.props}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this.renderGroupColumns}
        />
      </View>
    );
  }
}

export default GroupColumnValueContainer;
