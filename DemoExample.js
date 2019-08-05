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

import { Colors } from 'react-native/Libraries/NewAppScreen';
import StatisticsTable from './components/StatisticsTable';

import { DEFAULT_ROW_HEIGHT, DEFAULT_MIN_ROW_HEIGHT } from './utils/constants';

class DemoExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsTableRowHeight: DEFAULT_ROW_HEIGHT
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

  renderZoomInOutButtons = () => (
    <View style={{ flexDirection: 'row', padding: 24 }}>
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
    </View>
  );

  render() {
    const { statisticsTableRowHeight } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            {this.renderZoomInOutButtons()}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <StatisticsTable
                rowHeight={statisticsTableRowHeight}
                onExpandedCollapsedButtonPress={item => {
                  alert(item.title);
                }}
                onSeeDetailsButtonPress={item => {
                  alert(item.title);
                }}
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    flexDirection: 'row',
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});

export default DemoExample;
