import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const ContactDetails = ({ route, navigation }) => {
  const { contactId } = route.params; // You can pass the contact ID as a parameter

  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Fetch the contact details by ID from your backend API
    async function fetchContactDetails() {
      try {
        const response = await axios.get(`localhost:3000/api/v1/contact/find_contact/${contactId}`);
        if (response.status === 200) {
          setContact(response.data); // Assuming the response contains contact details
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    }

    fetchContactDetails();
  }, [contactId]);

  return (
    <View style={styles.container}>
      {contact ? (
        <>
          <Text style={styles.title}>Contact Details</Text>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{contact.name}</Text>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.text}>{contact.phoneNumber}</Text>
          {/* Add additional contact details here */}
          <Button
            title="Edit Contact"
            onPress={() => {
              // Navigate to the Edit Contact screen, passing the contact data
              navigation.navigate('EditContact', { contact: contact });
            }}
          />
        </>
      ) : (
        <Text>Loading contact details...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default ContactDetails;
