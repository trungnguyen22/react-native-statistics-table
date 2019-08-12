import React, { PureComponent } from 'react';
import { View } from 'react-native';
import DropDownFilterButton from './DropDownFilterButton';
import DropDownListItemFilter from './DropDownListItemFilter';

class DropDownFilter extends PureComponent {
  render() {
    const {
      containerStyle,
      buttonTitle,
      buttonIcon,
      isShownDropDownList,
      dataSource,
      onFilterButtonPress,
      onItemFilterPress
    } = this.props;
    const filterButtonTextStyle = isShownDropDownList
      ? { color: '#00b600' }
      : { color: '#24253d', opacity: 0.6 };
    return (
      <View style={{ ...containerStyle }}>
        <DropDownFilterButton
          containerStyle={{ alignSelf: 'flex-end', marginRight: 24 }}
          titleTextStyle={filterButtonTextStyle}
          title={buttonTitle}
          icon={buttonIcon}
          onPress={onFilterButtonPress}
        />
        {isShownDropDownList && (
          <DropDownListItemFilter
            containerStyle={{ marginTop: 8 }}
            dataSource={dataSource}
            onItemFilterPress={onItemFilterPress}
          />
        )}
      </View>
    );
  }
}

export default DropDownFilter;
