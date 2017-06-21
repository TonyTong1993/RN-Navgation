'use strict';

import React, { Component } from 'react';
import ChatScreen from './ChatScreen';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

class RecentChatScreen extends Component {
	static navigationOptions = {
		title:'Recent Chats'
	}
  render() {
  	let { navigate } = this.props.navigation;
    return (
      <View >
      	 <Button title='Chat with Lucy' onPress={()=>navigate('Chat',{user:'Lucy'})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default RecentChatScreen;