import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image,
Keyboard, TouchableWithoutFeedback} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {Input, Spinner, MyButton} from './common';
import {emailChanged, passwordChanged, loginUser, isLoggedIn} from '../actions';

class LoginForm extends Component {

componentDidMount(){
  if(this.props.fullLoading){
      this.props.isLoggedIn();
   }
  }


   onButtonClicked(){
     //firebase.auth kısmı ile email şifre ile giriş sapladık
     //hata mesajını işlem doğruysa ortadan kaldırdık
   const{email, password}=this.props;

  this.props.loginUser(email.trim(), password);
   }


   onEmailChanged(text){
 this.props.emailChanged(text);
}

onPasswordChanged(text){
 this.props.passwordChanged(text);
}
    render(){
      //this.state den aldık error kodunu
      const {error, loading, fullLoading}=this.props;
      //errorMsg yi error a eşitledik ve hata varsa text olarak yazdırdık

 if(fullLoading){
    return(<Spinner/>)
  }

const errorMsg=error?(
  <Text style={styles.errorStyle}>
  {error}
  </Text>
):
null;
		return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View style={styles.headBackground} />
				<View>
					<Text style={styles.logo}>MyCountry</Text>
					<Text style={styles.logoDescription}>Sizin için bir rehber</Text>
				</View>
				<ScrollView>
					<View style={styles.loginArea}>
						<Text style={styles.loginAreaTitle}>Biz Sizin Yerinize Seyahatinizi Düşündük</Text>
           <Text style={styles.Texture}>Giriş Yapın</Text>
           <Input inputPlaceHolder="Email Giriniz."
                  keyboard='email-address'
                    auto='none'

                   onChangeText={this.onEmailChanged.bind(this)}
               value={this.props.email}/>
          <Input  inputPlaceHolder="******"
                      onChangeText={this.onPasswordChanged.bind(this)}
                      secureTextEntry
                      value={this.props.password}/>
                      <Text style={styles.acilklamaText}>
                     *Hesabınız yoksa üzülmeyin! Email ve şifre girin uygulama sizin için yeni bir hesap oluşturur.
                      </Text>
                      {errorMsg}
        <MyButton  spinner={loading}
                   _onPress={this.onButtonClicked.bind(this)}/>

          </View>

				</ScrollView>
			</View>
      </TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps=state=>{
  const{email, password, loading, error, fullLoading }=state.auth;
  return{
    email, password, loading, error, fullLoading
  }
}
export default connect(mapStateToProps,
  {emailChanged, passwordChanged, loginUser, isLoggedIn})(LoginForm);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f9fb',
		paddingVertical: 80
	},
	headBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 250,
		width: '100%',
		backgroundColor: '#ff9261'
	},
	logo: {
		textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#423189'
	},
	logoDescription: {
		textAlign: 'center',
		color: '#423189'
	},
	loginArea: {
		marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 5,

		shadowColor: 'black',
		shadowOpacity: .2,
		shadowRadius: 3,
		shadowOffset: {
			width:0,
			height: 2
		}
	},
	loginAreaTitle: {
		fontSize: 15,
		textAlign: 'center',
    color:'#4e4eb6'
	},
  Texture:{
    color:'#4e4eb6',
    fontSize:12,
    paddingTop:15
  },
  acilklamaText:{
    fontSize:10,
    color:'red'
  },
  errorStyle:{
  fontSize:12,
  color:'red',
  paddingTop:10,
  alignSelf:'center'
  }

});
