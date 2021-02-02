import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import oldTimey from './data/oldTimey.json';

// export default function App() {
//   const [name, setName] = useState('');
//   console.log('My data', oldTimey)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#ff0000',
  }
});

console.log('My data', oldTimey)
class OldQuotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    }
  }
}
// https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B1000%2C788%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2017%2F07%2Fgettyimages-563963027-2000.jpg
getSaying(); {
  oldTimey[Math.floor(Math.random() * oldTimey.length)];
}

render(); {
  const question = this.getSaying();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Whats the Cat's Meow{name}</Text>
      <Button
        onPress={() => setName('Bob')}
        title="click me"
      ></Button>
      <Text
        style={question.quote}
      ></Text>
      <Button
        onPress={question.meaning}
        title="display meaning"
      ></Button>

      <StatusBar style="auto" />
    </View >

  )
}

export default OldQuotes;