'use strict';

import React, { Component } from 'react';
import api from '../server/URLConfig';
import HttpsTool from '../server/HttpsTool';
import {
  StyleSheet,
  View,
} from 'react-native';

class MTHome extends Component {
	static navigationOptions = ({navigation})=>({
		title:'首页'
	})
 _requestRecommend() {
  fetch(api.recommend)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
  })
 }

 componentDidMount() {
   const {REQUEST_TYPE,fetchData} = HttpsTool;
   fetchData(REQUEST_TYPE.GET,api.recommend,null)
 }
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({

});


export default MTHome;