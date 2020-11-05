import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, FlatList, TouchableOpacity,
ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Setting from './setting';
import {fetchProfile, isLoggedIn} from '../actions';
import {Card2} from './common';



class Profil extends Component{
state={
  firstName:"",
  lastName:""
}


  componentDidMount(){
const { currentUser } = firebase.auth();
  firebase.database().ref(`/profil/${currentUser.uid}/`).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.setState({
      firstName : (snapshot.val() && snapshot.val().firstName) || 'Belirlenmemiş',
      lastName : (snapshot.val() && snapshot.val().lastName) || 'Belirlenmemiş'
    })
    });
  }


  render(){
    const user = firebase.auth().currentUser;
     function onPress(){
     firebase.auth().signOut();
     Actions.auth();
   }


    return(

  <View style={styles.bigPic}>
  <View style={styles.uyariWrapper}>
  <Text style={styles.uyari}>1.0.0 Sürümünde Bulunmaktayız. Profil Ekranı Tam Olarak, Sürüm 1.0.1 ile Aktif Olacaktır. Anlayışınız için Teşekkür Ederiz.</Text>
  </View>
      <View style={styles.pic}>
      <Image style={styles.profilePic} source={require('../assest/healthcare-and-medical.png')}
      />
      </View>
   <View style={styles.profileWrapper}>

      <Text style={styles.textWrapper}>Adınız : {this.state.firstName}</Text>
       <Text style={styles.textWrapper}>Soyadınız : {this.state.lastName}</Text>
       <View style={styles.mailWrapper}>
       <Text>Email:</Text>
       <Text style={styles.mail}>{user.email}</Text>
       </View>
       <TouchableOpacity onPress={Actions.setting}>
       <View style={styles.logoutWrapper} >
       <Image style={styles.picture}
        source={require('../assest/setting.png')}
        />
       <Text style={styles.menu}>Profil Bilgilerini Ayarla</Text>
        </View>
       </TouchableOpacity>
       
       <TouchableOpacity onPress={onPress}>
       <View style={styles.logoutWrapper} >
       <Image style={styles.picture}
        source={require('../assest/logout.png')}
        />
       <Text style={styles.menu}>Çıkış Yap</Text>
        </View>
       </TouchableOpacity>


   </View>
  </View>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {fetchProfile})(Profil);



const styles=StyleSheet.create({
bigPic:{
  flex:1,
  width:undefined,
  height:undefined,
  alignItems:'center',
  justifyContent:'flex-start',
  backgroundColor:'white'
},
pic:{
width:130,
height:130,
borderRadius:65,
marginTop:80,
alignItems:'center',
justifyContent:'center',
backgroundColor:'grey',
borderColor:'red',
borderWidth:4
},
profilePic:{
  width:120,
  height:120,
  borderRadius:60,
},
profileWrapper:{
  marginTop:20,
},
mail:{
  justifyContent:'center',
  alignItems:'center',
  marginLeft:3
},
mailWrapper:{

  flexDirection: 'row'
},
menuWrapper:{
  flexDirection: 'row'
},
picture:{
  width:20,
  height:20,
  paddingLeft:10
},
logoutWrapper:{
  flexDirection: 'row',
  marginTop:15
},
menu:{
  marginLeft:3
},
textWrapper:{
  marginBottom:7
},
uyari:{
  color:'red',
  fontSize:15,
  justifyContent:"center",
  paddingLeft:12,
  paddingRight:12,
},
uyariWrapper:{
  borderWidth:2,
  borderRadius:8,
  borderColor:'red',
  marginTop:15
}

})
