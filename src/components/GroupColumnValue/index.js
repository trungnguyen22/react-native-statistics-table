import React, { PureComponent } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import GroupColumnValue from './GroupColumnValue';
import { DEFAULT_ROLE_ROW_WIDTH } from '../../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class GroupColumnValueContainer extends PureComponent {
  renderGroupColumns = ({ item }) => {
    const {
      headerTitleContainerStyle,
      childHeaderTitleContainerStyle,
      valueCellContainerStyle,
      rowHeight
    } = this.props;
    return (
      <GroupColumnValue
        rowHeight={rowHeight}
        headerTitleContainerStyle={headerTitleContainerStyle}
        childHeaderTitleContainerStyle={childHeaderTitleContainerStyle}
        valueCellContainerStyle={valueCellContainerStyle}
        dataSource={item}
      />
    );
  };

  render() {
    const { dataSource } = this.props;
    const flatListWidth =
      (SCREEN_HEIGHT + SCREEN_WIDTH + Math.abs(SCREEN_HEIGHT - SCREEN_WIDTH)) / 2;
    return (
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          style={{ width: flatListWidth - DEFAULT_ROLE_ROW_WIDTH }}
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
