import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Contact from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default function ContactDisplay() {
  const [name, setName] = useState('');
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const call = (contact) => {
    // call the contact
    console.log({ contact })
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, ''); // [\ <-- = escape character] || brackets = match characters anything or. '' replace with nothing 
    console.log({ phoneNumber });
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }
  const showContacts = async () => {
    // get all my phone contacts
    const contactList = await Contact.getContactsAsync();
    setContacts(contactList.data);
  }

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    console.log({ status });
    if (status === 'granted') {
      setPermissions(true);
    } else { setPermissions(false) }
  }

  useEffect(() => {
    getPermissions();
  }, [])
  //const updateName = () => setName('Bob');
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>
          <Button
            style={styles.button}
            onPress={showContacts}
            title="share with friends"

          ></Button>
        </Text >
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />}
        ></FlatList>
        <StatusBar style="auto" />
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'light',
    color: '#6495ed',
  },
  button: {
    backgroundColor: '#f0f8ff',
    marginTop: '10px',
  }
});
