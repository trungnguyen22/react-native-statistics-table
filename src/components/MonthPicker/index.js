import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { addMonths, isSameMonth, lastDayOfMonth, subMonths, getDate, isPast } from 'date-fns';

const iconPreviousButton = require('./img/icon_previous.png');
const iconNextButton = require('./img/ic_next.png');
const iconDisabledNextButton = require('./img/ic_disabled_next.png');

class MonthPicker extends PureComponent {
  constructor(props) {
    super(props);
    const { dateTime = undefined } = this.props;
    this.state = {
      dateTime: dateTime || new Date(),
      canGoNextMonth: isPast(dateTime)
    };
    this.today = new Date();
  }

  getPreviousMonthDateTime = date => {
    const previousMonthDateTime = subMonths(date, 1);
    return lastDayOfMonth(previousMonthDateTime);
  };

  getNextMonthDateTime = (date, today) => {
    const nextMonthDateTime = addMonths(date, 1);
    return isSameMonth(nextMonthDateTime, today) ? today : lastDayOfMonth(nextMonthDateTime);
  };

  onPreviousButtonPress = () => {
    const { dateTime } = this.state;
    const previousMonthDateTime = this.getPreviousMonthDateTime(dateTime);
    this.setState({
      dateTime: previousMonthDateTime,
      canGoNextMonth: true
    });
  };

  onNextButtonPress = () => {
    const { dateTime } = this.state;
    const nextMonthDateTime = this.getNextMonthDateTime(dateTime, this.today);
    this.setState({
      dateTime: nextMonthDateTime,
      canGoNextMonth: !isSameMonth(nextMonthDateTime, new Date())
    });
  };

  renderButton = (imageSource, onPress, isDisabled) => (
    <TouchableOpacity
      disabled={isDisabled}
      style={{ marginLeft: 8, marginRight: 8 }}
      onPress={onPress}
    >
      <Image source={imageSource} />
    </TouchableOpacity>
  );

  renderPreviousButton = onPress => {
    return this.renderButton(iconPreviousButton, onPress, false);
  };

  renderNextButton = onPress => {
    const { canGoNextMonth } = this.state;
    const imageSource = canGoNextMonth ? iconNextButton : iconDisabledNextButton;
    return this.renderButton(imageSource, onPress, !canGoNextMonth);
  };

  renderDateTime = () => {
    const { dateTime } = this.state;
    return (
      <Text style={{ marginLeft: 12, marginRight: 12, justifyContent: 'center' }}>
        {`Tháng ${dateTime.getMonth() + 1} - ${dateTime.getFullYear()}`}
      </Text>
    );
  };

  render() {
    const { containerStyle } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {this.renderPreviousButton(this.onPreviousButtonPress)}
        {this.renderDateTime()}
        {this.renderNextButton(this.onNextButtonPress)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  }
});

export default MonthPicker;
