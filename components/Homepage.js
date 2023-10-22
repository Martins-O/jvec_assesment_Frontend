import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import SignUp from "./SignUp";
import SignIn from "./Login";

const Homepage = ({ navigation }) => {
  const handleSignUp = async () => {
    await navigation.navigate(SignUp);
  };

  const handleSignIn = async () => {
    await navigation.navigate(SignIn);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/app_logo.png')} // You can replace this with your app's logo image
        style={styles.logo}
      />
      <Text style={styles.title}>Contact App</Text>
      <Text style={styles.description}>
        Welcome to the Contact App. Easily manage your contacts here.
      </Text>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
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
