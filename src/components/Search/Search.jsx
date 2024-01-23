import React, { useEffect, useState } from "react"
import { TouchableOpacity, FlatList, SafeAreaView, Pressable, TextInput, Text, View } from "react-native";
import styles from "./styles";
import { getMusicByName } from '../../database/read'

const Search = (props) => {

    const [songName, setSongName] = useState('');

    const [songs, setSongs] = useState([]);

    const handleSearch = async () => {
        const songsData = await getMusicByName(songName);
        setSongs(songsData);
        setSongName('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchView}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter song name"
                    value={songName}
                    onChangeText={setSongName}
                />
                <Pressable onPress={handleSearch}
                    style={{
                        backgroundColor: '#1DB954',
                        padding: 10,
                        width: 100,
                        borderRadius: 20,
                        marginLeft:10
                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>Search</Text>
                </Pressable>
            </View>

            <FlatList style={styles.list}
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.listview} onPress={() => props.navigation.navigate('Song', { songData: item })}>
                        <Text style={styles.song}>{item.song}</Text><Text style={styles.artist}>{item.artist}</Text>
                    </TouchableOpacity>}
            />

        </SafeAreaView >
    )

}

export default Search;
