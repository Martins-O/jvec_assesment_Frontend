import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async () => {
    // Validate user input
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }

    // Prepare the data to send to the server
    const userData = {
      email: email,
      password: password,
    };

    try {
      // Make an HTTP POST request to the backend for user authentication
      const response = await axios.post('localhost:3000/api/v1/customer/sign_in', userData);

      if (response.status === 200) {
        // Sign-in was successful
        alert('Sign-in successful! You are now logged in.');
        // You can also navigate the user to the main app screen here
      } else {
        // Sign-in failed, handle the error message from the server
        alert('Sign-in failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during sign-in. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text style={styles.resetPassword}>
        <Text style={styles.link}>Forgot your password?</Text>
      </Text>
      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  resetPassword: {
    marginTop: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  signUpText: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default SignIn;
