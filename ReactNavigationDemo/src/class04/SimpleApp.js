'use strict';

import React, { Component } from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
import TabBarItem from './customComponents/TabBarItem';
import MTHome from './screens/MTHome';
import MTDiscover from './screens/MTDiscover';
import MTMerchant from './screens/MTMerchant';
import MTOrder from './screens/MTOrder';
import MTProfile from './screens/MTProfile';
import color from './uilt/color';
const MainScreenNavigator = TabNavigator({
	home:{
		screen:MTHome,
		navigationOptions:({navigation})=>({
			tabBarLabel:'首页',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarItem 
					tintColor={tintColor}
					focused={focused}
					normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
					selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
				/>
				)
		})
	},
	discover:{
		screen:MTDiscover,
		navigationOptions:({navigation})=>({
			tabBarLabel:'附近',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarItem 
					focused={focused}
					tintColor={tintColor}
					normalImage={require('./img/tabbar/pfb_tabbar_discover@2x.png')}
					selectedImage={require('./img/tabbar/pfb_tabbar_discover_selected@2x.png')}
				/>
				)
		})
	},
	merchant:{
		screen:MTMerchant,
		navigationOptions:({navigation})=>({
			tabBarLabel:'逛一逛',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarItem 
					focused={focused}
					tintColor={tintColor}
					normalImage={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
					selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
				/>
				)
		})
	},
	order:{
		screen:MTOrder,
		navigationOptions:({navigation})=>({
			tabBarLabel:'订单',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarItem 
					focused={focused}
					tintColor={tintColor}
					normalImage={require('./img/tabbar/pfb_tabbar_order@2x.png')}
					selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
				/>
				)
		})
	},
	profile:{
		screen:MTProfile,
		navigationOptions:({navigation})=>({
			tabBarLabel:'我的',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarItem 
					focused={focused}
					tintColor={tintColor}
					normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
					selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
				/>
				)
		})
	}
},{
	tabBarOptions:{
		    activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
	}
})
const SimpleApp = StackNavigator({
	Tab:{screen:MainScreenNavigator}
},{
	navigationOptions:{
		    headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
	}
})
export default SimpleApp;