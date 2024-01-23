import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Route';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>

    </SafeAreaView>
  );
}