import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text, Image} from 'react-native';
import {Spinner2} from './spinner2';

const MyButton=({spinner, _onPress, color})=>{
const content=spinner?(
  <Spinner2/>
): (
    <TouchableOpacity onPress={_onPress}>
    <View style={styles.pictureWrapper} >
    <Image style={styles.picture}
     source={require('../../assest/signin.png')}
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

},
  picture:{
    width:50,
    height:50,
  },
  pictureWrapper:{
    alignItems:'center',
    paddingTop:15
  }
})


export {MyButton};
