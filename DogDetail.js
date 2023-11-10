// DogDetail.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DogDetail = ({ route }) => {
  const { dog } = route.params;
  
  // Imprime los datos del perro en la consola
  console.log('Datos del perro:', dog);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: dog.image.url }} style={styles.image} />
      <Text style={styles.name}>Name: {dog.name}</Text>
      {dog.height && <Text style={styles.height}>Height: {dog.height.metric} cm</Text>}
      {dog.weight && <Text style={styles.weight}>Weight: {dog.weight.metric} kg</Text>}
      <Text style={styles.origin}>Origin: {dog.origin}</Text>
      <Text style={styles.bred_for}>Bred for: {dog.bred_for}</Text>
      <Text style={styles.breed_group}>Breed Group: {dog.breed_group}</Text>
      <Text style={styles.temperament}>Temperament: {dog.temperament}</Text>
      <Text style={styles.lifeSpan}>Life span: {dog.life_span}</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weight: {
    fontSize: 18,
    marginBottom: 8,
  },
  height: {
    fontSize: 18,
    marginBottom: 8,
  },
  origin: {
    fontSize: 18,
    marginBottom: 8,
  },
  bred_for: {
    fontSize: 18,
    marginBottom: 8,
  },
  breed_group: {
    fontSize: 18,
    marginBottom: 8,
  },
  temperament: {
    fontSize: 18,
    marginBottom: 8,
  },
  lifeSpan: {
    fontSize: 18,
    marginBottom: 8,
  },
 
 
});

export default DogDetail;
