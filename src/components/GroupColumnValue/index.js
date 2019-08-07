import React, { PureComponent } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import GroupColumnValue from './GroupColumnValue';
import { DEFAULT_ROLE_ROW_WIDTH } from '../../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
          style={{ width: SCREEN_WIDTH - DEFAULT_ROLE_ROW_WIDTH }}
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
