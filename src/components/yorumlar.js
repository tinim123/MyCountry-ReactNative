import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Yorumlar extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          <Text style={styles.homeText}>hasan</Text>
          </View>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
  },
  homeText:{
    fontSize:25,
    color:'white'
  }
})

export default Yorumlar;
