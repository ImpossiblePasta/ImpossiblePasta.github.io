import React, { useState } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import lotus from '../assets/icons/lotus.jpeg';

function ArtHeader(headerText) {

    return (
        <View name="ArtHeader" style={styles.container}>
            <ImageBackground source={lotus} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>{headerText}</Text>
            <Text style={styles.credits}>Art by: Steven Belledin, 2017</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 64,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    credits: {
        color: 'white',
        fontSize: 10,
        lineHeight: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
      },
  });

export default ArtHeader