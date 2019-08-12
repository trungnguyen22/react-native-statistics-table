import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DropDownFilter from './DropDownFilter';

/**
 * Example:
 * [
 *  {
 *    buttonTitle: 'Sap xep',
 *    buttonIcon: require('./img/xxx.png'),
 *    isSelected: false
 *    dataSource: [
 *      {
 *        id: 1234, // optional
 *        value: 1234, // optional
 *        label: 'Order Product Price Asc',
 *        isSelected: false,
 *      }
 *    ]
 *  }
 * ]
 */

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class GroupDropDownFilter extends PureComponent {
  renderDropDownFilters = (dataSource, onFilterSelect, onFilterItemSelect) => {
    return dataSource.map((filter, index) => {
      return (
        <DropDownFilter
          containerStyle={{
            position: 'absolute',
            right: index * 100,
            top: 0,
            marginLeft: 15,
            marginRight: 15,
            zIndex: 0
          }}
          key={index}
          buttonTitle={filter.buttonTitle}
          buttonIcon={filter.buttonIcon}
          dataSource={filter.dataSource}
          isShownDropDownList={filter.isSelected}
          onFilterButtonPress={() => {
            onFilterSelect(index);
          }}
          onItemFilterPress={(itemFilter, itemFilterIndex) => {
            onFilterItemSelect(index, itemFilterIndex);
          }}
        />
      );
    });
  };

  render() {
    const { containerStyle, dataSource, onFilterSelect, onFilterItemSelect } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }} pointerEvents="box-none">
        {this.renderDropDownFilters(dataSource, onFilterSelect, onFilterItemSelect)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flexDirection: 'row'
  }
});

export default GroupDropDownFilter;
