import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
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
 *        label: 'Order Product Price Asc',
 *        isSelected: false,
 *      }
 *    ]
 *  }
 * ]
 */


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
            onFilterSelect(filter);
          }}
          onItemFilterPress={itemFilter => {
            onFilterItemSelect(filter, itemFilter);
          }}
        />
      );
    });
  };

  render() {
    const { containerStyle, dataSource, onFilterSelect, onFilterItemSelect } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {this.renderDropDownFilters(dataSource, onFilterSelect, onFilterItemSelect)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row'
  }
});

export default GroupDropDownFilter;
