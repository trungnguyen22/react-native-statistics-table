/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { subMonths } from 'date-fns';

import StatisticsTable from './components/StatisticsTable/index';
import { DEFAULT_ROW_HEIGHT, DEFAULT_MIN_ROW_HEIGHT } from './utils/constants';
import {
  DUMMY_DATA_ROLE,
  DUMMY_DATA_GROUP_COLUMN,
  DUMMY_DATA_GROUP_FILTER
} from './utils/DummyData';
import MonthPicker from './components/MonthPicker';
import GroupDropDownFilter from './components/DropDownFilter/GroupDropDownFilter';

class DemoExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsTableRowHeight: DEFAULT_ROW_HEIGHT,
      roleDataSource: DUMMY_DATA_ROLE,
      groupColumnDataSource: DUMMY_DATA_GROUP_COLUMN,
      filterDataSource: DUMMY_DATA_GROUP_FILTER
    };
  }

  onZoomOutPress = () => {
    const { statisticsTableRowHeight } = this.state;
    const newRowHeight =
      statisticsTableRowHeight > DEFAULT_MIN_ROW_HEIGHT
        ? statisticsTableRowHeight - 10
        : DEFAULT_MIN_ROW_HEIGHT;
    this.setState({
      statisticsTableRowHeight: newRowHeight
    });
  };

  onZoomInPress = () => {
    const { statisticsTableRowHeight } = this.state;
    const newRowHeight = statisticsTableRowHeight + 10;
    this.setState({
      statisticsTableRowHeight: newRowHeight
    });
  };

  // ----------------------------------------------
  // DROP DOWN FILTER EVENT HANDLERS
  // ----------------------------------------------

  onFilterSelect = selectedFilter => {
    const { filterDataSource } = this.state;
    const selectedFilterIndex = filterDataSource.indexOf(selectedFilter);
    const mappedfilterDataSource = filterDataSource.map((item, index) => {
      const mappedItem = Object.assign({}, item);
      mappedItem.isSelected = index === selectedFilterIndex && !item.isSelected;
      return mappedItem;
    });
    this.setState({
      filterDataSource: mappedfilterDataSource
    });
  };

  onFilterItemSelect = (selectedFilter, selectedItemFilter) => {
    const { filterDataSource } = this.state;
    const selectedFilterIndex = filterDataSource.indexOf(selectedFilter);
    const selectedItemFilterIndex = selectedFilter.dataSource.indexOf(selectedItemFilter);

    const mappedDataSource = selectedFilter.dataSource.map((itemFilter, index) => {
      const mappedItemFilter = Object.assign({}, itemFilter);
      mappedItemFilter.isSelected = index === selectedItemFilterIndex;
      return mappedItemFilter;
    });

    const mappedfilterDataSource = filterDataSource.map((item, index) => {
      const mappedItem = Object.assign({}, item);
      if (index === selectedFilterIndex) {
        mappedItem.dataSource = mappedDataSource;
      }
      return mappedItem;
    });

    this.setState({
      filterDataSource: mappedfilterDataSource
    });
  };

  // ----------------------------------------------
  // RENDER METHODS
  // ----------------------------------------------

  renderZoomInOutButtons = statisticsTableRowHeight => (
    <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center', backgroundColor: 'lightgray' }}>
      <TouchableOpacity
        style={{ padding: 16, backgroundColor: 'lightgray' }}
        onPress={this.onZoomOutPress}
      >
        <Text>Zoom Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 12, padding: 16, backgroundColor: 'lightgray' }}
        onPress={this.onZoomInPress}
      >
        <Text>Zoom In</Text>
      </TouchableOpacity>
      <Text style={{ marginLeft: 24, fontSize: 16 }}>Row Height: {statisticsTableRowHeight}</Text>
      <MonthPicker
        containerStyle={{ zIndex: 999 }}
        dateTime={new Date()}
        onDateTimeChange={() => {}}
      />
    </View>
  );

  render() {
    const {
      statisticsTableRowHeight,
      roleDataSource,
      groupColumnDataSource,
      filterDataSource
    } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1 }}>
          {this.renderZoomInOutButtons(statisticsTableRowHeight)}
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <StatisticsTable
              rowHeight={statisticsTableRowHeight}
              roleDataSource={roleDataSource}
              groupColumnDataSource={groupColumnDataSource}
              onExpandedCollapsedButtonPress={item => {}}
              onSeeDetailsButtonPress={item => {}}
            />
          </ScrollView>
          <GroupDropDownFilter
            containerStyle={{ position: 'absolute', top: 24, right: 24 }}
            dataSource={filterDataSource}
            onFilterSelect={this.onFilterSelect}
            onFilterItemSelect={this.onFilterItemSelect}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});

export default DemoExample;
