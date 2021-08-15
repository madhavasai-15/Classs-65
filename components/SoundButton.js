import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
    playSound = async (sound) => {
        var link = "https://s3-whitehatjrcontent.whjr.online/phones/"+sound+".mp3";
        await Audio.Sound.createAsync({
            uri: link
        }, 
        {shouldPlay: true})
    }

    render(){
        return(
            <View>
                <TouchableOpacity style={styles.displayTextButton} 
                onPress={() => {
                    this.playSound(this.props.sound)
                }}>
                    <Text style={styles.displayText}> {this.props.word} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    }
})