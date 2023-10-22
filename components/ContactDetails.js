import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import EditContact from "./EditContact";

const ContactDetails = ({ route, navigation }) => {
  const { contactId } = route.params;

  const [contact, setContact] = useState(null);

  useEffect(async () => {
    async function fetchContactDetails() {
      try {
        const response = await axios.get(`localhost:3000/api/v1/contact/find_contact/${contactId}`);
        if (response.status === 200) {
          setContact(response.data);
        }
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    }

    await fetchContactDetails();
  }, [contactId]);

  return (
    <View style={styles.container}>
      {contact ? (
        <>
          <Text style={styles.title}>Contact Details</Text>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.text}>{contact.first_name}</Text>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.text}>{contact.last_name}</Text>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.text}>{contact.phone_number}</Text>

          <Button
            title="Edit Contact"
            onPress={async () => {
              await navigation.navigate(EditContact, {contact: contact});
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
