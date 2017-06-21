'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
const SimpleApp = StackNavigator({
	Home:{screen:HomeScreen},
	Chat:{screen:ChatScreen}
})

export default SimpleApp;