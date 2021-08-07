import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import {Header} from 'react-native-elements';
import db from './local-db';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      chunks: [],
    }
  }

  render(){

   
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = 'blue'
          centerComponent = {{
            text: "WeRead",
            style: {
              color: '#fff',
              fontSize: 20
            } 
          }}
        />

        <Image
          style={styles.image}
          source={{ uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png' }}
        />
        {/* <Text>{db["the"].phones}</Text> */}

        <TextInput
          style={styles.input}
          onChangeText={(data) => {
            this.setState({
              text: data
            })
          }}
          value={this.state.text}
          placeholder={'Type Words'}
        />

        <TouchableOpacity 
          style={styles.go}
          onPress={() => {
          this.setState({
            chunks: db[this.state.text].chunks
          })
        }}>
            <Text style={styles.goText}> Go </Text>
        </TouchableOpacity>

        <View>
          {
            this.state.chunks.map((chunk) => {
                return (
                  <TouchableOpacity style={styles.displayTextButton}>
                    <Text style={styles.displayText}> {chunk} </Text>
                  </TouchableOpacity>
                )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 4,
    width: '80%',
    height: 40,
    marginTop: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },
  go: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    margin: 10,
    padding: 10,
  },
  goText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  displayTextButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 100,
  }
});
