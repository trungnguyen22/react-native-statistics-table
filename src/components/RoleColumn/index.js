import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RootRow from './RootRow';
import LeafRow from './LeafRow';
import { DEFAULT_BORDER_WIDTH, DEFAULT_BORDER_COLOR } from '../../utils/constants';

export class RoleColumn extends PureComponent {
  renderItemRoleRow = ({ item, index }) => {
    const { rowHeight, onExpandedCollapsedButtonPress, onSeeDetailsButtonPress } = this.props;
    const backgroundColor = index % 2 !== 0 ? '#f5f5f5' : '#ffffff';
    return item.level === 0 ? (
      <RootRow
        rowHeight={rowHeight}
        backgroundColor={backgroundColor}
        item={item}
        onLeftIconPress={pressedItem => {
          onExpandedCollapsedButtonPress(pressedItem);
        }}
      />
    ) : (
      <LeafRow
        rowHeight={rowHeight}
        backgroundColor={backgroundColor}
        item={item}
        onSeeDetailsButtonPress={pressedItem => {
          onSeeDetailsButtonPress(pressedItem);
        }}
      />
    );
  };

  render() {
    const { rowHeight, containerStyle, dataSource } = this.props;
    return (
      <View style={{ ...styles.container, marginTop: rowHeight, ...containerStyle }}>
        <FlatList
          bounces={false}
          data={dataSource}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this.renderItemRoleRow}
          extraData={this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: DEFAULT_BORDER_WIDTH,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    borderLeftWidth: DEFAULT_BORDER_WIDTH,
    borderColor: DEFAULT_BORDER_COLOR
  }
});

export default RoleColumn;
