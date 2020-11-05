import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from './common';
import BurcList from './burcList';

class Astroloji extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <BurcList />
          </View>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    backgroundColor:'#E5E5E8',
    paddingBottom:10
  },
  homeText:{
    fontSize:25,
    color:'white'
  }
})

export default Astroloji;
