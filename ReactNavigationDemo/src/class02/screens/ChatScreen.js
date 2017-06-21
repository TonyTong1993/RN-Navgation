'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title:`Chat with ${navigation.state.params.user}`
  })
  render() {
    let { params } = this.props.navigation.state;
    return (
      <View >
      	<Text>
      		Chat With {params.user}!
      	</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
export default ChatScreen;