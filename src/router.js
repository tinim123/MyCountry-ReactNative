import React from 'react';
import firebase from 'firebase';
import {Scene, Router, Actions, Drawer} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Eglence from './components/eglence';
import Profil from './components/profil';
import Menu from './components/Menu';
import Astroloji from './components/astroloji';
import Cafe from './components/cafe';
import Setting from './components/setting';
import Hotel from './components/hotel';
import Pharmacy from './components/pharmacy';
import Restaurant from './components/restaurant';
import Taxi from './components/taxi';
import Camping from './components/camping';
import CarRental from './components/carRental';
import GeceKlubu from './components/geceKlubu';
import Parking from './components/parking';
import Atm from './components/atm';


const RouterComp=()=>{
  return(
    <Router titleStyle={{color:'#423189'}}
             navigationBarStyle={{backgroundColor: '#e0e0e0'}}>
 <Scene key='root' hideNavBar={true}>
    <Scene key='auth' hideNavBar={true}>
    <Scene key='login'
          component={LoginForm}
          title='Login'
          hideNavBar={true}
           />
    </Scene>

    <Scene key='main' headerLayoutPreset="center" >
    <Drawer
    key='drawerMenu'
    contentComponent={Menu}
    drawerPosition="right"
    drawerWidth={160}
    hideNavBar={true}
    drawerImage={require("./assest/app.png")}
    rightButtonIconStyle={{width:20, height:20}}
    >
    <Scene key='home'
           component={Home}
           title='MyCountry'
           onLeft={()=>{
            Actions.profil();
           }}
         leftTitle='Profil'
         navigationBarStyle={{backgroundColor: '#DFCAE5'}}
         titleStyle={{color:"black"}}
        leftButtonTextStyle = {{ color:'black'}}
        />


    <Scene key='about'
           component={About}
           title='Hakkımızda'
           onLeft={()=>{
            Actions.home();
           }}
           leftTitle='Geri'
           navigationBarStyle={{backgroundColor: '#DFCAE5'}}
           leftButtonTextStyle = {{ color:'black'}}
            titleStyle={{color:"black"}}
          />

    <Scene key='astroloji'
           navigationBarStyle={{backgroundColor: '#E5E5E8'}}
           component={Astroloji}
           title='Astroloji'
           onLeft={()=>{
            Actions.home();
           }}
         leftTitle='Geri'
         leftButtonTextStyle = {{ color:'black'}}
           />

     <Scene key='cafe'
          component={Cafe}
          title='Kafeler'
          onLeft={()=>{
           Actions.home();
          }}
         leftTitle='Geri'
         leftButtonTextStyle = {{ color:'black'}}
            />

    <Scene key='contact'
          component={Contact}
          title='İletişim'
          onLeft={()=>{
           Actions.home();
          }}
          leftTitle='Geri'
          navigationBarStyle={{backgroundColor: '#DFCAE5'}}
          leftButtonTextStyle = {{ color:'black'}}
           titleStyle={{color:"black"}}
          />
    <Scene key='eglence'
         component={Eglence}
           title='Eğlence Mekanları'
           onLeft={()=>{
            Actions.home();
           }}
           leftTitle='Geri'
           leftButtonTextStyle = {{ color:'black'}}
          />
   <Scene key='profil'
        component={Profil}
        title='Profil'
        navigationBarStyle={{backgroundColor: 'white'}}
        onLeft={()=>{
         Actions.home();
        }}
        leftTitle='Geri'
        leftButtonTextStyle = {{ color:'black'}}
       />

  <Scene key='setting'
         component={Setting}
         title='Ayarlar'
         onLeft={()=>{
          Actions.profil();
         }}
         leftTitle='Profil'
         leftButtonTextStyle = {{ color:'black'}}
          />
  <Scene key='hotel'
         component={Hotel}
         title='Otel/Apart'
         onLeft={()=>{
         Actions.home();
           }}
        leftTitle='Geri'
        leftButtonTextStyle = {{ color:'black'}}
          />
  <Scene key='pharmacy'
       component={Pharmacy}
       title='Eczaneler'
       onLeft={()=>{
       Actions.home();
         }}
      leftTitle='Geri'
      leftButtonTextStyle = {{ color:'black'}}
        />
  <Scene key='restaurant'
     component={Restaurant}
     title='Lokantalar'
     onLeft={()=>{
     Actions.home();
       }}
    leftTitle='Geri'
    leftButtonTextStyle = {{ color:'black'}}
        />

  <Scene key='taxi'
   component={Taxi}
   title='Taksi Durakları'
   onLeft={()=>{
   Actions.home();
         }}
  leftTitle='Geri'
  leftButtonTextStyle = {{ color:'black'}}
        />

  <Scene key='camping'
   component={Camping}
   title='Kamp Alanları'
   onLeft={()=>{
   Actions.home();
         }}
  leftTitle='Geri'
  leftButtonTextStyle = {{ color:'black'}}
        />

  <Scene key='carRental'
   component={CarRental}
   title='Araç Kiralama'
   onLeft={()=>{
   Actions.home();
         }}
  leftTitle='Geri'
  leftButtonTextStyle = {{ color:'black'}}
        />

<Scene key="geceKlubu"
   component={GeceKlubu}
   title="Gece Klüpleri"
   onLeft={()=>{
     Actions.home();
   }}
    leftTitle="Geri"
    leftButtonTextStyle = {{ color:'black'}}/>

  <Scene key="parking"
 component={Parking}
 title="Araç Park"
 onLeft={()=>{
     Actions.home();
 }}
  leftTitle="Geri"
  leftButtonTextStyle = {{ color:'black'}}/>

  <Scene key="atm"
 component={Atm}
 title="ATM"
 onLeft={()=>{
     Actions.home();
 }}
  leftTitle="Geri"
  leftButtonTextStyle = {{ color:'black'}}/>
  </Drawer>
    </Scene>
    </Scene>
    </Router>

  )
}


export default RouterComp;
