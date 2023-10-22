import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import ContactDetails from "./ContactDetails";

const ContactsList = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    async function fetchContacts() {
      try {
        const response = await axios.get('localhost:3000/api/v1/contact/find_all_contact');
        if (response.status === 200) {
          setContacts(response.data);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }

    await fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={async () => {
              await navigation.navigate(ContactDetails, {contact: item});
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  contactItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 16,
  },
});

export default ContactsList;
