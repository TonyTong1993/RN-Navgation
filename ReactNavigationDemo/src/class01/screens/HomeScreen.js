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
	static navigationOptions = {
		title:"Home",
	};
  render() {
    let { navigate }  = this.props.navigation;
    return (
      <View >
      	<Text>
      		Hello,Chat App!
      	</Text>
        <Button title='Chat with Lucy' onPress={()=>navigate('Chat',{user:'Lucy'})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
export default HomeScreen;