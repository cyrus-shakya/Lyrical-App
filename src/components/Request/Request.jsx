import React from "react"
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./styles";
import { useState } from "react";
import * as database from "../../database";


const Request = () => {

    const [songName, setSongName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleAddPress = () => {
        if (songName && artistName) {
            onRequestSong(songName, artistName,youtubeUrl);

            setErrorMessage(null);
            setSongName('');
            setArtistName('');
            setYoutubeUrl('');
        } else {
            setErrorMessage("The song name or artist name is missing.");
        }
    };

   

    const handleSongChange = (value) => {
        setSongName(value);
    };

    const handleArtistChange = (value) => {
        setArtistName(value);
    };

    const handleYoutubeChange = (value) => {
        setYoutubeUrl(value);
    };

    const onRequestSong = async (songName, artistName,youtubeUrl )=> {
        try {
            const result = await database.addPost(songName,artistName,youtubeUrl);
        } catch (err) {
            console.log("err", err);

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Request Song </Text>
            {errorMessage && (
                <View>
                    <Text style={{ color: 'red' }}>* Attention *</Text>
                    <Text style={{ color: 'red' }}>{errorMessage}</Text>
                </View>
            )}
            <View>
                <TextInput style={styles.textBox} placeholder='Enter Song name'
                    onChangeText={handleSongChange}
                    defaultValue={songName} />
                <TextInput style={styles.textBox}placeholder='Enter Artist'
                    onChangeText={handleArtistChange}
                    defaultValue={artistName} />
                <TextInput style={styles.textBox} placeholder='Enter Youtube Url'
                    onChangeText={handleYoutubeChange}
                    defaultValue={youtubeUrl} />
            </View>

            <Pressable onPress={handleAddPress}
                style={{
                    backgroundColor: '#34B91D',
                    padding: 10,
                    width: 200,
                    marginTop: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center'
                }}>Submit</Text>
            </Pressable>
          
        </View>

    )
}

export default Request;





