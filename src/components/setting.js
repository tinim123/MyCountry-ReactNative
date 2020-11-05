import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,
Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Input,Spinner, YeniButton} from './common';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {changeName, changeLastName, sendInfo} from '../actions';




class Setting extends Component{
  onChangeName(firstName){
    this.props.changeName(firstName);
  }
  onChangeLastName(lastName){
    this.props.changeLastName(lastName);
  }
sendInfo(){
  this.props.sendInfo(this.props.firstName, this.props.lastName);

}



  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

         <View style={styles.infoWrapper}>
          <View style={styles.HomeWrapper}>
           <Text style={styles.textWrapper}>Lütfen Bilgileri Giriniz </Text>
           <Input text='Ad' inputPlaceHolder='Adınızı Giriniz'
                     onChangeText={this.onChangeName.bind(this)}
                     value={null} />
          <Input text='Soyad' inputPlaceHolder='Soyadınızı Giriniz'
                    onChangeText={this.onChangeLastName.bind(this)}
                     value={null} />
          </View>
          <TouchableOpacity onPress={this.sendInfo.bind(this)}>
          <View style={styles.saveWrapper} >
          <Image style={styles.picture}
           source={require('../assest/save.png')}/>
          <Text style={styles.menu}>Save</Text>
           </View>
          </TouchableOpacity>
       </View>
       </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps=state=>{
  const {firstName, lastName}=state.infoForm;
  return{
    firstName, lastName
  }
}
export default connect(mapStateToProps,{
  changeName, changeLastName, sendInfo
})(Setting);


const styles=StyleSheet.create({
  HomeWrapper:{
   justifyContent:'center',
   alignItems:'center',
   paddingTop:50,
   paddingLeft:20,
   paddingRight:20,
  },
  infoWrapper:{
  alignItems:'center',
  justifyContent:'center'
  },
  textWrapper:{
   paddingTop:70,
   color:'#4e4eb6',
   fontSize:15,
 },
 picture:{
   width:20,
   height:20,
   paddingLeft:10,
   marginLeft:10,
 },
 saveWrapper:{
   flexDirection:'row',
   paddingTop:17
 },
 menu:{
   paddingLeft:10
 }

})
