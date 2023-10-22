import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';


const CreateContact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleCreateContact = async () => {
    // 1. Validate user input
    if (!name || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    // 2. Create a contact object
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      // Add additional fields as needed
    };

    try {
      // 3. Make an HTTP POST request to your backend API
      const response = await axios.post('localhost:3000/api/v1/contact/add_contact', newContact);

      if (response.status === 201) {
        // Contact creation was successful
        console.log('New Contact:', newContact);
        alert('Contact created successfully!');

        // Optionally, you can navigate the user to another screen, e.g., the Contacts List.
      } else {
        // Handle the case where contact creation failed
        alert('Contact creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during contact creation. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Add Contact" onPress={handleCreateContact} />
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
});

export default CreateContact;
