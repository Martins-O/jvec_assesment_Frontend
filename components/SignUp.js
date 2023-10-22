import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async () => {
      if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
      }

      // Prepare the data to send to the server
      const userData = {
        username: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber
      };

      try {
        // Make an HTTP POST request to the backend for user registration
        const response = await axios.post('localhost:3000/api/v1/customer/sign_up', userData);

        if (response.status === 201) {
          // Registration was successful
          alert('Registration successful! You can now log in.');
          // You can also navigate the user to the login screen here
        } else {
          // Registration failed, handle the error message from the server
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again.');
      }

    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setName}
        value={name}
      />
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink}>Log In</Text>
      </Text>
    </View>
  )
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
  loginText: {
    marginTop: 16,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
