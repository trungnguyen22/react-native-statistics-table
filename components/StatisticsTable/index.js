import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RoleColumn from '../RoleColumn';
import ValueColumnContainer from '../ColumnContainer';
import { DUMMY_DATA_ROLE, DUMMY_DATA_GROUP_HEADER } from '../../utils/DummyData';
import { DEFAULT_ROW_HEIGHT, DEFAULT_MIN_ROW_HEIGHT } from '../../utils/constants';

class StatisticsTable extends PureComponent {
  

  render() {
    const {
      rowHeight = DEFAULT_ROW_HEIGHT,
      roleDataSource = DUMMY_DATA_ROLE,
      valueDataSource = DUMMY_DATA_GROUP_HEADER
    } = this.props;
    const calculatedRowHeight =
      rowHeight >= DEFAULT_MIN_ROW_HEIGHT ? rowHeight : DEFAULT_MIN_ROW_HEIGHT;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <RoleColumn rowHeight={calculatedRowHeight} dataSource={roleDataSource} />
        <ValueColumnContainer rowHeight={calculatedRowHeight} dataSource={valueDataSource} />
      </View>
    );
  }
}

export default StatisticsTable;
