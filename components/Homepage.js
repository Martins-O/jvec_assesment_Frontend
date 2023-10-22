import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/app_logo.png')} // You can replace with your app logo image
        style={styles.logo}
      />
      <Text style={styles.title}>Contact App</Text>
      <Text style={styles.description}>
        Welcome to the Contact App. Easily manage your contacts here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});

export default Homepage;
