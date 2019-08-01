import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RootRow from './RootRow';
import LeafRow from './LeafRow';

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
    return dataSource.map(item => {
      return item.level === 0 ? <RootRow item={item} /> : <LeafRow item={item} />;
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
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray'
  }
});

export default RoleColumn;
