/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SimpleApp from './src/class04/SimpleApp';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNavigationDemo extends Component {
  render() {
    return (
        <SimpleApp />
    );
  }
}

AppRegistry.registerComponent('ReactNavigationDemo', () => ReactNavigationDemo);
