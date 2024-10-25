import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Movie {
  id: number;
  title: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <View style={styles.container}>
    {movies.length > 0 ? (
      movies.map((movie) => <Text key={movie.id}>{movie.title}</Text>)
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
