import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import ContactsList from "./ContactsList";


const CreateContact = ( navigation ) => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone_number, setPhone_number] = useState('');


  const handleCreateContact = async () => {

    if (!first_name || !last_name || !phone_number) {
      alert('Please fill in all fields');
      return;
    }

    const newContact = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
    };

    try {
      const response = await axios.post('localhost:3000/api/v1/contact/add_contact', newContact);

      if (response.status === 201) {
        console.log('New Contact:', newContact);
        alert('Contact created successfully!');
        await navigation.navigate(ContactsList);

        // Optionally, you can navigate the user to another screen, e.g., the Contacts List.
      } else {

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
        placeholder="First name"
        onChangeText={setFirst_name}
        value={first_name}
      />
      <TextInput
        style={styles.input}
        placeholder="last Name"
        onChangeText={setLast_name}
        value={last_name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhone_number}
        value={phone_number}
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
