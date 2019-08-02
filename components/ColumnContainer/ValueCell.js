import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DEFAULT_CONTAINER_WIDTH } from '../RoleColumn/ConnectedLine';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_VALUE_CELL_WIDTH,
  DEFAULT_BORDER_WIDTH
} from '../../utils/constants';

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
    const { containerStyle, cell } = this.props;
    const iconImageSource =
      cell.iconType === 'down'
        ? require('./img/ic_arrow_down.png')
        : require('./img/ic_arrow_up.png');
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        <Text style={styles.rawValueText}>{cell.rawValue}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={iconImageSource} />
          <Text style={{ ...styles.calculatedValueText, color: cell.colorType }}>
            {`${cell.calculatedValue} ${cell.unit}`}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DEFAULT_ROW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6
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
