import 'react-native-get-random-values';
import React, { useState, useEffect } from "react"
import { Text, View, SafeAreaView } from "react-native";
import styles from "./styles";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";

const Song = (props) => {

    const songData = props.route.params.songData
    
    return (
            // <ScrollView style={styles.container}>
            //     <Text style={styles.songName}>{songData?.title.rendered}</Text>
            //     <Text style={styles.artist}>Artist: {songData?.type}</Text>
                <WebView source={{ html: `${songData?.content.rendered}` }}/>
               
            // </ScrollView>

    )
}

export default Song;
