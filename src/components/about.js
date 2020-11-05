import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class About extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <Text style={styles.homeText}>
        MyCountry uygulaması sizleri gittiğiniz veya bulunduğunuz yerlerde,
        sizler için önem arz ettiğini düşündüğümüz alanların ve mekanların
        daha kolay bulunabilmesi, sizi bir yükten kurtarmak ve sizleri rahat
        bir seyahat sağlamak amacıyla geliştirilmiş bir uygulamadır.
        Misyon olarak kullanıcı odaklı ve  ücretsiz olarak piyasaya sürülmüş
        olan bu uygulama yine sizlerin desteği ile büyüyecektir.
        Uygulama içerisinde iyi eğlenceler güzel seyahatler dileriz.
          </Text>
          <Text style={styles.homeText}>
      MyCountry kurucusu: Hasan Ali Yıldır
          </Text>

          </View>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    backgroundColor:'#DFCAE5',
    justifyContent:'center',
    alignItems:'center'
  },
  homeText:{
    fontSize:15,
    color:'black',
    paddingLeft:14,
    paddingRight:7,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default About;
