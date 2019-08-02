import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RootRow from './RootRow';
import LeafRow from './LeafRow';
import { DEFAULT_CONTAINER_WIDTH } from './ConnectedLine';
import { DEFAULT_ROW_HEIGHT } from '../../utils/constants';

const DUMMY_DATA_ROLE = [
  {
    title: 'Harrell Gutierrez',
    isExpand: true,
    level: 0,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: false
  },
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 1,
    isShownSeeMore: true,
    isBeginning: false,
    isFinal: false
  },
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 1,
    isShownSeeMore: true,
    isBeginning: true,
    isFinal: false
  },
  {
    title: 'DSA',
    isExpand: false,
    level: 1,
    isShownSeeMore: false,
    isBeginning: true,
    isFinal: false
  },
  // Beginning Level 2
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 2,
    isShownSeeMore: false,
    isBeginning: true,
    isFinal: false
  },
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 2,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: false
  },
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 2,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: false
  },
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 2,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: false
  },
  // Final Level 2
  {
    title: 'Harrell Gutierrez',
    isExpand: false,
    level: 2,
    isShownSeeMore: false,
    isBeginning: false,
    isFinal: true
  },
  // Demo 2
  {
    title: 'Joanna Leon',
    isExpand: false,
    level: 0,
    isShownSeeMore: false,
    isBeginning: true,
    isFinal: false
  },
  {
    title: 'Newton Waller',
    isExpand: false,
    level: 0,
    isShownSeeMore: false,
    isBeginning: true,
    isFinal: false
  },
  {
    title: 'Simpson Herman',
    isExpand: false,
    level: 0,
    isShownSeeMore: false,
    isBeginning: true,
    isFinal: false
  }
];
export class RoleColumn extends PureComponent {
  renderRoleRows = dataSource => {
    return dataSource.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#f5f5f5' : 'white';
      return item.level === 0 ? (
        <RootRow containerStyle={{ backgroundColor: backgroundColor }} item={item} />
      ) : (
        <LeafRow containerStyle={{ backgroundColor: backgroundColor }} item={item} />
      );
    });
  };

  render() {
    const { dataSource = DUMMY_DATA_ROLE, containerStyle } = this.props;
    return (
      <View style={{ ...styles.container, containerStyle }}>{this.renderRoleRows(dataSource)}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: DEFAULT_ROW_HEIGHT,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderBottomColor: 'gray'
  }
});

export default RoleColumn;
