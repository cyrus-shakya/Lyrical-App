import React, { useEffect, useState } from "react"
import { TouchableOpacity, FlatList, SafeAreaView, Button, StyleSheet, Text, View, RefreshControl } from "react-native";
import styles from "./styles";
import { fetchSongs } from '../../database/read'

const Home = (props) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const songsData = await fetchSongs();
        setSongs(songsData);
    };

    const onRefresh = () =>{
        fetchData();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}> Recent Popular Songs </Text>

            <FlatList style={styles.list}
            refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh}></RefreshControl>}
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.listview} onPress={() => props.navigation.navigate('Song', { songData: item })}>
                        <Text style={styles.song}>{item.title.rendered}</Text><Text style={styles.artist}>{item.type}</Text>
                    </TouchableOpacity>}
            />

        </SafeAreaView >
    )

}

export default Home;
