import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text, Image} from 'react-native';
import {Spinner} from './spinner';

const YeniButton=({spinner, onPress, color, resim})=>{
const content=spinner?(
  <Spinner/>
): (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.pictureWrapper} >
    <Image style={styles.picture}
     source={resim}
     />
     </View>
    </TouchableOpacity>

  )
  return(
    <View style={styles.buttonStyle}>{content}</View>
  )
}
const styles=StyleSheet.create({
  buttonStyle:{
  justifyContent:'center',
  paddingTop:30,
  paddingHorizontal:40

},
  picture:{
    width:72,
    height:72,
  },
  pictureWrapper:{

    paddingTop:15
  }
})


export {YeniButton};
