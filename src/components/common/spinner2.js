import React from 'react';
import {Text, ActivityIndicator, StyleSheet, View, Image} from 'react-native';

const Spinner2=()=>{
  return(
    <View style={styles.spinner}>
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

})
export{Spinner2}
