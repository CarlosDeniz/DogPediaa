// DogList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const DogList = ({ navigation }) => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { dog: item })}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image?.url || 'placeholder-url' }} />
        <Card.Content>
          <Title>{item.name}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredDogs}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  listContainer: {
    marginTop: 8,
  },
  card: {
    margin: 8,
    flex: 1,
  },
});

export default DogList;
