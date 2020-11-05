import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import{Alert} from 'react-native';

export const SEND_INFO='send_info';
export const NAME_CHANGE='name_change';
export const LASTNAME_CHANGE='lastname_change';
const REF_DATABASE='/profil';

export const sendInfo=(firstName, lastName)=>{
  const mail=firebase.auth().currentUser;
  const email=mail.email;
  return(dispatch)=>{
    firebase.database().ref(REF_DATABASE+'/'+firebase.auth().currentUser.uid)
    .set({email, firstName, lastName})
    .then(()=>{
      Alert.alert(
        'Bilgi',
        'Bilgileriniz güncellenmiştir.',
        [
          {
            text: 'Profil',
            onPress: () => Actions.profil()
          },
        ],
        { cancelable: false }
      );
    dispatch({
      type:SEND_INFO
    })
    })
  }
}


export const changeName=(firstName)=>{
  return{
    type:NAME_CHANGE,
    payload:firstName
  }
}

export const changeLastName=(lastName)=>{
  return{
    type:LASTNAME_CHANGE,
    payload:lastName
  }
}
