import React from 'react';
import {StyleSheet, Text} from 'react-native';
import './effects.css';
import ArtHeader from '../../components/art_header';

function Effects(){
    document.title="About"
    return (
        <div>
            {ArtHeader("CARD EFFECTS")}
            <div style={styles.container}>

            </div>
        </div>
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
  });

export default Effects