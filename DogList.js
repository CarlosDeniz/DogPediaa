// DogList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const DogList = ({ navigation }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Reemplaza 'TU_CLAVE_DE_API' con tu clave real de Dog API
    const apiKey = 'live_zepKUzVon1mzBkwzZ30h1UjH5KlrPIDNtAnEtLa5brSGtiZ91qO6xGyKPXhQ22gE';
    const apiUrl = `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setDogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalles', { dog: item })}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image?.url || 'placeholder-url' }} style={styles.cardImage} />
        <Card.Content>
          <Title>{item.name}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dogs}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    margin: 8,
    flex: 1,
  },
  cardImage: {
    height: 150, // Ajusta la altura de la imagen según tus preferencias
    resizeMode: 'cover',
  },
});

export default DogList;
