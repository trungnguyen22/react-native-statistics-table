import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import GroupColumn from './GroupColumn';
import { DUMMY_DATA_GROUP_HEADER, DUMMY_DATA_GROUP_VALUE } from '../../utils/DummyData';

const DUMMY_DATA = {
  groupHeader: DUMMY_DATA_GROUP_HEADER,
  groupValue: DUMMY_DATA_GROUP_VALUE
};

export class ValueColumnContainer extends PureComponent {
  renderGroupColumns = dataSource => {
    return dataSource.groupHeader.map((itemGroupHeader, index) => {
      return <GroupColumn key={index} dataSource={itemGroupHeader} />;
    });
  };

  render() {
    const { dataSource = DUMMY_DATA } = this.props;
    return <View style={{ flexDirection: 'row' }}>{this.renderGroupColumns(dataSource)}</View>;
  }
}

export default ValueColumnContainer;
