import React from 'react';
import {Text, ActivityIndicator, StyleSheet, View, Image} from 'react-native';

const Spinner=()=>{
  return(
    <View style={styles.spinner}>
   <Image style={styles.image} source={require('../../assest/appImage.png')}  />
   <Text style={styles.text}>MyCountry</Text>
   <ActivityIndicator/>
    </View>
  )
}
const styles=StyleSheet.create({
  spinner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  image:{
    width:140,
    height:140,
    paddingBottom:25
  },
  text:{
    fontSize:20,
    color:"darkblue",
    paddingBottom:15,
    paddingLeft:5
  }
})
export{Spinner}
