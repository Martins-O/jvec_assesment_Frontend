import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native'; // Assuming you're using AsyncStorage to manage user sessions

const SignOut = ({ navigation }) => {
  useEffect(() => {
    // Implement sign-out logic here, such as clearing user data and tokens from storage

    // Clear user data and tokens from AsyncStorage or any other storage mechanism
    AsyncStorage.removeItem('userToken');

    // You can also clear other user-related data as needed

    // After sign-out, navigate to the login screen or the screen you prefer
    navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signing Out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignOut;
