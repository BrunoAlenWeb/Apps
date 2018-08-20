import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreenApps from './src/components/HomeScreenApps';
import Consultoria from './apps/consultoria/index';
import CaraCoroa from './apps/caracoroa/index';

export default class App extends Component {

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    HomeApps: HomeScreenApps,
    Consultoria: Consultoria,
    CaraCoroa: CaraCoroa

  },
  {
    initialRouteName: 'HomeApps',
  }
)