'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class HomeScreen extends Component {
	static navigationOptions = {
		title:"Home",
	};
  render() {
    return (
      <View >
      	<Text>
      		Hello,Navigation!
      	</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
const SimpleApp = StackNavigator({
	Home:{screen:HomeScreen}
})

export default SimpleApp;