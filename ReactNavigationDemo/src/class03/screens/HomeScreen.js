'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

class HomeScreen extends Component {

  render() {

    return (
      <View >
      	<Text>
      		Hello,Chat App!
      	</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
export default HomeScreen;