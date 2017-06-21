'use strict';

import React, { Component } from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import RecentChatScreen from './screens/RecentChatScreen';
import AllChatScreen from './screens/AllChatScreen';
const MainScreenNavigator = TabNavigator({
	Recent:{screen:RecentChatScreen},
	All:{screen:AllChatScreen}
})
const SimpleApp = StackNavigator({
	Home:{screen:MainScreenNavigator},
	Chat:{screen:ChatScreen}
})
export default SimpleApp;