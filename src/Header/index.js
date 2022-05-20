import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../img/logo.png')} style={styles.headerLogo} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../img/send.png')} style={styles.headerSend} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
  },
  headerSend: {
    width: 23,
    height: 23,
  },
});

export default Header;
