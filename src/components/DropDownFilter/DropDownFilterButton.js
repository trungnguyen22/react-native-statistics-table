import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export class DropDownFilterButton extends PureComponent {
  renderFilterButton = (title, icon, titleTextStyle, onPress) => {
    return (
      <TouchableOpacity style={styles.filterBtn} onPress={onPress}>
        <Text style={{ ...styles.filterTitle, ...titleTextStyle }}>{title}</Text>
        <Image source={icon} />
      </TouchableOpacity>
    );
  };

  render() {
    const { containerStyle, title, icon, titleTextStyle, onPress } = this.props;
    return (
      <View style={{ ...containerStyle }}>
        {this.renderFilterButton(title, icon, titleTextStyle, onPress)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterTitle: {
    marginRight: 4,
    fontFamily: 'HelveticaNeue',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#00b600'
  }
});

export default DropDownFilterButton;
