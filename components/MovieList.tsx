import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Movie {
  id: string;
  title: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <View style={styles.container}>
    {movies.length > 0 ? (
      <FlatList 
        data={movies}
        renderItem={({item}) => {
          return(
            <Text key={item.id}>{item.title}</Text>
          )
        }}
      />
    ) : (
      <Text>No movies available</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MovieList;
