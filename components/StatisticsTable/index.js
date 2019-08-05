import React, { PureComponent } from 'react';
import { View } from 'react-native';
import RoleColumn from '../RoleColumn';
import GroupColumnContainer from '../ColumnContainer';
import { DUMMY_DATA_ROLE, DUMMY_DATA_GROUP_COLUMN } from '../../utils/DummyData';
import { DEFAULT_ROW_HEIGHT, DEFAULT_MIN_ROW_HEIGHT } from '../../utils/constants';

// ---------- MOCKUP DATA ----------
/**
DUMMY_DATA_ROLE = [
  {
    title: 'Harrell Gutierrez',
    isExpand: true,
    level: 0,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: false
  },
  {...}
]

DUMMY_DATA_GROUP_COLUMN = [
  {
    label: 'Group Header 1',
    children: [
      {
        label: 'Child 2',
        colorType: 'black',
        iconType: 'up',
        values: [
          {
            rawValue: '1,232,000,000,000',
            calculatedValue: 34,
            colorType: 'red',
            iconType: 'down',
            unit: '%'
          },
          {...}
        ]
      },
      {...}
    ]
  },
  {...}
]
 */

class StatisticsTable extends PureComponent {
  render() {
    const {
      rowHeight = DEFAULT_ROW_HEIGHT,
      roleDataSource = DUMMY_DATA_ROLE,
      groupColumnDataSource = DUMMY_DATA_GROUP_COLUMN
    } = this.props;
    const calculatedRowHeight =
      rowHeight >= DEFAULT_MIN_ROW_HEIGHT ? rowHeight : DEFAULT_MIN_ROW_HEIGHT;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <RoleColumn rowHeight={calculatedRowHeight} dataSource={roleDataSource} />
        <GroupColumnContainer rowHeight={calculatedRowHeight} dataSource={groupColumnDataSource} />
      </View>
    );
  }
}

export default StatisticsTable;
