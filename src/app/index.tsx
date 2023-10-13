import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';
import { supabase } from '../lib/supabase';
import MovieItem from '../components/MovieItem';
import { TextInput } from 'react-native-gesture-handler';


export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const db = async () => {

      let { data: movies, error } = await supabase
        .from('movies')
        .select('*')
        .range(0, 25)

      if (movies) {
        setMovies(movies)
      }

    }

    db();
  }, [])

  const onPress = async () => {
    const { data } = await supabase.functions.invoke('embed', {
      body: {
        input: query
      }
    });


    const { data: movies } = await supabase.rpc('match_movies', {
      query_embedding: data.embedding, // Pass the embedding you want to compare
      match_threshold: 0.78, // Choose an appropriate threshold for your data
      match_count: 5, // Choose the number of matches
    })

    setMovies(movies)
    setQuery('')
  }


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder='AI: Search for movies...'
            placeholderTextColor={'gray'}
            style={styles.input}
          />
          <Button title="Search" onPress={onPress} />
        </View>
        <FlatList data={movies} renderItem={MovieItem} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181413',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    padding: 15,
    margin: 10,
    color: 'white'
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
    width: 100
  }
});
