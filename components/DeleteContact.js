import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const DeleteContact = ({ route, navigation }) => {
  const { contactId } = route.params; // You can pass the contact ID as a parameter

  useEffect(() => {
    // Make a confirmation dialog to ask the user if they really want to delete the contact
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: handleDeleteContact,
        },
      ],
      { cancelable: false }
    );
  }, []);

  const handleDeleteContact = async () => {
    // Send an HTTP DELETE request to delete the contact from your backend API
    try {
      const response = await axios.delete(`localhost:3000/api/v1/contact/delete/${contactId}`);

      if (response.status === 200) {
        // Contact deletion was successful
        Alert.alert('Contact Deleted', 'The contact has been deleted successfully.', [
          {
            text: 'OK',
            onPress: () => {
              // Navigate back to the ContactsList screen or any other desired screen
              navigation.navigate('ContactsList');
            },
          },
        ]);
      } else {
        // Handle API error response
        Alert.alert('Deletion Failed', 'Failed to delete the contact. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while deleting the contact. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deleting Contact...</Text>
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

export default DeleteContact;
