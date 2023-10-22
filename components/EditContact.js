import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import ContactsList from "./ContactsList";

const EditContact = ({ route, navigation }) => {
  const { contactId } = route.params; // You can pass the contact ID as a prop

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone_number, setPhone_number] = useState('');

  useEffect(async () => {

    async function fetchContactDetails() {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/contact/${contactId}`);

        if (response.status === 200) {
          const contactData = response.data;
          setFirst_name(contactData.first_name);
          setLast_name(contactData.last_name);
          setPhone_number(contactData.phone_number);
        } else {
          Alert.alert('Error', 'Failed to fetch contact details. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred while fetching contact details. Please try again.');
      }
    }

    await fetchContactDetails();
  }, [contactId]);

  const handleSaveChanges = async () => {
    if (!first_name || !last_name || !phone_number) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    const updatedContact = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
    };

    try {
      const response = await axios.put(`http://localhost:3000/api/v1/contact/update/${contactId}`, updatedContact);

      if (response.status === 200) {
        Alert.alert('Success', 'Contact details saved successfully!');
        await navigation.navigate(ContactsList);
      } else {
        Alert.alert('Error', 'Contact details update failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred during contact details update. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="first name"
        onChangeText={setFirst_name}
        value={first_name}
      />
      <TextInput
        style={styles.input}
        placeholder="last name"
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
