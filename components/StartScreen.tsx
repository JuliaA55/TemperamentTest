import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
const test = {
    description: 'Тип темпераменту є вродженою особливістю нервової системи людини. Зазвичай, протягом життя він залишається незмінним (не плутайте темперамент із характером). Визначивши тип темпераменту людини, можна розповісти про швидкість виникнення психічних процесів індивіда та їх інтенсивність, про силу емоцій людини та це ще не всі характеристики.',
    image: 'https://ukr.media/static/ba/aimg/3/9/8/398484_1.jpg',
  };
export default function StartScreen({ onStart }: {onStart: ()=> void}){
    return(
        <View style={styles.container}>
        <Image source={{ uri: test.image }} style={styles.image} />
        <Text style={styles.description}>{test.description}</Text>
        <Button title="Розпочати" onPress={onStart} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
    image: { width: 380, height: 200, marginBottom: 20 },
    description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  });