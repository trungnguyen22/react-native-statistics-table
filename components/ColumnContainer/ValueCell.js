import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DEFAULT_MIN_ROW_HEIGHT } from '../../utils/constants';

// item
// {
//   rawValue: 1893,
//   calculatedValue: 34,
//   colorType: 'red/green',
//   iconType: 'down',
//   unit: '%'
// },

class ValueCell extends PureComponent {
  render() {
    const { rowHeight, containerStyle, cell } = this.props;
    const iconImageSource =
      cell.iconType === 'down'
        ? require('./img/ic_arrow_down.png')
        : require('./img/ic_arrow_up.png');
    return (
      <View style={{ ...styles.container, height: rowHeight, ...containerStyle }}>
        <Text style={{ ...styles.rawValueText, fontSize: rowHeight / 3.75 }}>{cell.rawValue}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: rowHeight / 4.2, height: rowHeight / 4.2 }}
            source={iconImageSource}
          />
          <Text
            style={{
              ...styles.calculatedValueText,
              fontSize: rowHeight / 5,
              color: cell.colorType
            }}
          >
            {`${cell.calculatedValue} ${cell.unit}`}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: DEFAULT_MIN_ROW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 24,
    paddingRight: 24
  },
  rawValueText: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#24253d'
  },
  calculatedValueText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right'
  }
});

export default ValueCell;
