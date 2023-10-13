import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { supabase } from '../lib/supabase';
import MovieItem from '../components/MovieItem';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

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

  const onPress = () => {
    setQuery('')
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder='AI: Search for movies...'
            placeholderTextColor={'gray'}
            style={styles.input}
          />
          <Button>Search</Button>
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
  }
});
