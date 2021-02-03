import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Quotes from './src/quotes';
import ContactDisplay from './src/contacts';
//import Header from './src/headers/header';

function App() {
  //console.log('My data App', oldTimey)
  //const [name, setName] = useState('');

  return (
    <div>

      <View style={styles.container}>

        <Text style={styles.header}>Welcome To The Cat's Meow</Text>
        <Quotes />
        <ContactDisplay />
      </View>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#6a5acd',
    marginBottom: '10px',
  }
});

export default App;

