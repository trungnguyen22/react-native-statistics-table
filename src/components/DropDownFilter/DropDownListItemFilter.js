import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import DropDownItemFilter from './DropDownItemFilter';

/**
 * Example dataSource
 * [
 *  {
 *    label: 'Order Product Price Asc',
 *    isSelected: false,
 *  }
 * ]
 *
 */
const smallRectangleIcon = require('./img/ic_rect.png');

class DropDownListItemFilter extends PureComponent {
  onItemPress = (item, index) => {
    const { onItemFilterPress } = this.props;
    onItemFilterPress(item, index);
  };

  renderItems = dataSource => {
    return dataSource.map((item, index) => {
      return (
        <DropDownItemFilter
          key={index}
          label={item.label}
          isSelected={item.isSelected}
          isShownBottomSeperatorLine={index !== dataSource.length - 1}
          onPress={() => {
            this.onItemPress(item, index);
          }}
        />
      );
    });
  };

  render() {
    const { containerStyle, dataSource } = this.props;
    return (
      <View style={{ ...containerStyle }}>
        <Image style={{ alignSelf: 'flex-end', marginRight: 24 }} source={smallRectangleIcon} />
        <View style={{ ...styles.container }}>{this.renderItems(dataSource)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 4,
    paddingBottom: 8,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: -7
    },
    shadowRadius: 64,
    shadowOpacity: 1,
    elevation: 11
  }
});

export default DropDownListItemFilter;
