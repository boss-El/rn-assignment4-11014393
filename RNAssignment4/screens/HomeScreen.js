import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import JobCard from '../components/JobCard';

const jobs = [
  { id: '1', title: 'Job 1', description: 'Description 1' },
  { id: '2', title: 'Job 2', description: 'Description 2' },
  { id: '3', title: 'Job 3', description: 'Description 3' },
  { id: '4', title: 'Job 4', description: 'Description 4' },
  { id: '5', title: 'Job 5', description: 'Description 5' },
  { id: '6', title: 'Job 6', description: 'Description 6' },
  { id: '7', title: 'Job 7', description: 'Description 7' },
  { id: '8', title: 'Job 8', description: 'Description 8' },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome, {name} ({email})</Text>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
