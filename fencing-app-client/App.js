import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Navigation from './src/navigation';
import React from 'react';



export default function App () {

  return (

    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },

});
