import React, { useState } from "react"
import { TouchableOpacity, Image,FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./styles";
import { Appbar } from 'react-native-paper';

const About = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../../assets/song.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
               <Text style={styles.header}>About our app</Text>
                <Text style={styles.text}>
                    Welcome to Lyrical App! We are a team of passionate developers who
                    are deeply connected to the world of music and lyrics. Our mission is
                    to create an immersive experience for you, where you can explore,
                    discover, and connect through the power of music.
                </Text>
                <Text style={styles.header}>
                    Our Developer Team:
                </Text>
                <Text style={styles.developerName}>Cyrus Shakya: 1157720</Text>
                <Text style={styles.developerName}>Nabin Pun: 1164717</Text>
            </View>
        </SafeAreaView>
    );
}

export default About;




