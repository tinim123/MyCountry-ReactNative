import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './components/loginForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './router';


console.disableYellowBox = true;/*sarı uyarıyı kaldırdık*/
const firebaseConfig = {
  apiKey: "AIzaSyCH0cNmhoxCuSE1R3X1oWm8wtHfsuSL4gM",
  authDomain: "mycountry-6c008.firebaseapp.com",
  databaseURL: "https://mycountry-6c008.firebaseio.com",
  projectId: "mycountry-6c008",
  storageBucket: "",
  messagingSenderId: "361771851386",
  appId: "1:361771851386:web:f4c43364cc64749d"
};
// Initialize Firebase
if(!firebase.apps.length){
  //çıkış yapmadan uygulamayı kapatan kullanıcılar tekrar
  //uygulamaya girdiklerinde
  //eğer önceden giriş varsa o sayfadan itibaren başlar
  firebase.initializeApp(firebaseConfig);}
  else {
    console.log("error");
  }
export default class MyCountry extends Component{


  render(){
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router/>
       </Provider>

      )
  }
}
