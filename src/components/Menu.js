import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

function onPress() {
  firebase.auth().signOut();
  Actions.auth();
}

export default function Menu() {
  return (
    <ScrollView style={styles.menuTry}>
      <TouchableOpacity onPress={Actions.home}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/homepage.png')}
          />
          <Text style={styles.menu}>Ana Sayfa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.hotel}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/hotel.png')}
          />
          <Text style={styles.menu}>Otel/Apart</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.cafe}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/coffee-breaks.png')}
          />
          <Text style={styles.menu}>Kafeler</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.eglence}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/funny.png')}
          />
          <Text style={styles.menu}>Bar/Pub</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.restaurant}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/seafood.png')}
          />
          <Text style={styles.menu}>Lokantalar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.pharmacy}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/pharmacy.png')}
          />
          <Text style={styles.menu}>Eczaneler</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.taxi}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/taxi.png')}
          />
          <Text style={styles.menu}>Taksi Durakları</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.camping}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/forest.png')}
          />
          <Text style={styles.menu}>Kamp Alanları</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.carRental}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/car-rental.png')}
          />
          <Text style={styles.menu}>Araç Kiralama</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.geceKlubu}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/nightclub.png')}
          />
          <Text style={styles.menu}>Gece Kulüpleri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.parking}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/parking.png')}
          />
          <Text style={styles.menu}>Araç Park</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.atm}>
        <View style={styles.menuWrapper}>
          <Image style={styles.picture} source={require('../assest/atm.png')} />
          <Text style={styles.menu}>ATM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.astroloji}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/burclar2.png')}
          />
          <Text style={styles.menu}>Astroloji</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.about}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/about.png')}
          />
          <Text style={styles.menu}>Hakkımızda</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.contact}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/contact.png')}
          />
          <Text style={styles.menu}>İletişim</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.logoutWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/logout.png')}
          />
          <Text style={styles.menu}>Çıkış Yap</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#423189',
    paddingBottom: 12,
  },
  cikisButton: {
    paddingTop: 100,
  },
  menuTry: {
    paddingTop: 20,
  },
  logoutWrapper: {
    flexDirection: 'row',
  },
  picture: {
    width: 20,
    height: 20,
    paddingLeft: 10,
    marginLeft: 10,
  },
  menuWrapper: {
    flexDirection: 'row',
  },
});
