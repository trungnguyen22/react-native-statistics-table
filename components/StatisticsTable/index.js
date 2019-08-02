import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import RoleColumn from '../RoleColumn';
import ValueColumnContainer from '../ColumnContainer';

class StatisticsTable extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <RoleColumn />
        <ValueColumnContainer />
      </View>
    );
  }
}

export default StatisticsTable;
