import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditContact = ({ route }) => {
  const { contactId } = route.params; // You can pass the contact ID as a prop

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch contact data by ID from your database or backend
    // Update the state with the contact's current data
    const fetchedContact = // Fetch the contact data by ID
      setName(fetchedContact.name);
    setPhoneNumber(fetchedContact.phoneNumber);
  }, [contactId]);

  import axios from 'axios';

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
      // 3. Save the contact data to the backend API
      const response = await axios.post(`localhost:3000/api/v1/contact/update/:${contactId}`, newContact);

      if (response.status === 201) {
        // Contact creation was successful
        alert('Contact created successfully!');
        // Optionally, you can navigate to another screen or update the local state.
      } else {
        // Handle API error response
        alert('Contact creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during contact creation. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Contact</Text>
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
      <Button title="Save Changes" onPress={handleSaveChanges} />
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

export default EditContact;
