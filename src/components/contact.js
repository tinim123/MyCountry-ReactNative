import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Profil extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <Text style={styles.homeText}>
          Uzun uğraşlar sonucu hayata geçirmiş olduğumuz MyCountry
          uygulamasında elbet ki belli hatalar ile karşılaşabilirsiniz.
          Bu hataların giderilmesi için bizlere ulaşmak isteyen sayın
          kullanıcılarımız bizlere
          aşağıda yer alan
          ihbar hatlarından 7/24 ulaşabilirler, sizlerin görüşleri ve
          yardımları bizim için önemlidir.
          </Text>
          <Text style={styles.homeText}>
          Email: hasanaliyildir1@gmail.com
          </Text>
          <Text style={styles.homeText}>Instagram: tinim123</Text>
          <Text style={styles.homeText}>Twitter: HasanAliYildir</Text>
          <Text style={styles.homeText}>Kurucu: Hasan Ali Yıldır</Text>

          </View>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    paddingTop:20,
    backgroundColor:'#DFCAE5'
  },
  homeText:{
    fontSize:15,
    color:'black',
    paddingLeft:14,
    paddingRight:7,
    paddingTop:20
  }
})

export default Profil;
