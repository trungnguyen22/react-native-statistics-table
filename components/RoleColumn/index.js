import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RootRow from './RootRow';
import LeafRow from './LeafRow';
import { DEFAULT_CONTAINER_WIDTH } from './ConnectedLine';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BORDER_COLOR
} from '../../utils/constants';

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
    isExpand: true,
    level: 0,
    isShownSeeMore: false,
    isBeginning: true,
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
  },
  {
    title: 'Simpson Herman',
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
      const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : '#ffffff';
      return item.level === 0 ? (
        <RootRow key={index} backgroundColor={backgroundColor} item={item} />
      ) : (
        <LeafRow key={index} backgroundColor={backgroundColor} item={item} />
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
    borderTopWidth: DEFAULT_BORDER_WIDTH,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderLeftWidth: DEFAULT_BORDER_WIDTH,
    borderLeftColor: DEFAULT_BORDER_COLOR,
    borderTopColor: DEFAULT_BORDER_COLOR,
    borderBottomColor: DEFAULT_BORDER_COLOR
  }
});

export default RoleColumn;
