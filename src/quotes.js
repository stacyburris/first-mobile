import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import oldTimey from '../data/oldTimey.json';

export default function Quotes() {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState(false);

  useEffect(() => {
    getSaying();
  }, []) // only run once with empty array

  const getSaying = () => {
    setQuestion(oldTimey[Math.floor(Math.random() * oldTimey.length)]);
  }

  const displayDescription = () => {
    setDescription(true);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      // fontWeight: 'bold',
      color: '#6a5acd',
      marginBottom: '10px',
    },
    img: {
      width: 185,
      height: 230,
      //marginBottom: '10px',
    },
    button: {
      backgroundColor: '#f0f8ff',
      marginTop: '10px',
    }
  });
  return (
    <>
      <View style={styles.container} >
        <TouchableOpacity onPress={() => { Alert.alert({ ...question.meaning }) }}>
          <Image
            source={question.quote}
            style={styles.img} />
        </TouchableOpacity >
        <StatusBar style="auto" />
      </View >
      <Button
        style={styles.button}
        onPress={displayDescription}
        title="What Does Grandma Really Mean???"
      ></Button>
      <View>
        {(description) ?
          <Text style={styles.header}>{question.meaning}</Text> : <Text></Text>
        }
      </View>
    </>
  );

}




  // export default OldQuotes;

  // return (
  //   <View style={styles.container} >
  //     <Image
  //       style={styles.img}
  //       source={question.quote}
  //     ></Image>
  //     <Button
  //       onPress={question.meaning}
  //       title="Whats Grandma Really Mean???"
  //     ></Button>

  //     <StatusBar style="auto" />
  //   </View >

  // );
