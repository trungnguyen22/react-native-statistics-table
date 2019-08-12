import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class DropDownItemFilter extends PureComponent {
  render() {
    const { containerStyle, label, isSelected, isShownBottomSeperatorLine, onPress } = this.props;
    const textFontWeight = isSelected ? styles.textBold : styles.textNormal;
    return (
      <TouchableOpacity style={{ ...styles.container, ...containerStyle }} onPress={onPress}>
        {isSelected && <View style={styles.selectedLine} />}
        <View style={{ padding: 12 }}>
          <Text style={{ ...styles.text, ...textFontWeight }}>{label}</Text>
        </View>
        {isShownBottomSeperatorLine && <View style={styles.seperatorLine} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#24253d'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textNormal: {
    fontWeight: 'normal'
  },
  selectedLine: {
    width: 4,
    height: '100%',
    backgroundColor: '#00b500'
  },
  seperatorLine: {
    height: 1,
    marginLeft: 12,
    marginRight: 12,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgray'
  }
});

export default DropDownItemFilter;
