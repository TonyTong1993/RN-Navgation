'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  const isInfo = state.params.mode === 'info';
  const {user} = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    ),
  };
};
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