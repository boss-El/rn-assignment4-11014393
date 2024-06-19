import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'; 
import jobs from './jobs'; 
import popularJobs from './popularJobs'; 

const PopularJobCard = ({ job }) => {
  return (
    <View style={styles.popularJobContainer}>
      <View style={styles.popularJobImageContainer}>
        <Image source={job.image} style={styles.popularJobImage} />
      </View>
      <View style={styles.popularJobText}>
        <View>
          <Text style={styles.popularJobUpperText}>{job.title}</Text>
          <Text style={styles.popularJobLowerText}>{job.company}</Text>
        </View>
        <View>
          <Text style={styles.popularJobUpperText}>{job.salary}</Text>
          <Text style={styles.popularJobLowerText}>{job.location}</Text>
        </View>
      </View>
    </View>
  );
};

const JobCard = ({ job }) => {
  return (
    <View style={[styles.card, { backgroundColor: job.backgroundColor }]}>
      <View style={styles.upperContent}>
        <View style={styles.upperIconContainer}>
          <Image 
            source={{ uri: job.image }} 
            style={styles.logo} 
          />
        </View>
        <View>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>
      </View>
      <View style={styles.lowerContent}>
        <Text style={styles.textDesign}>{job.amount}</Text>
        <Text style={styles.textDesign}>{job.location}</Text>
      </View>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const [search, setSearch] = useState('');

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageTextContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>
            {name}
          </Text>
          <Text style={styles.lowerText}>
            {email}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/profile.jpg')} style={styles.imageItSelf}/>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <Image source={require('../assets/icons8-search-50.png')} style={styles.searchIcon} />
        <TextInput 
          placeholder="Search a job or position" 
          placeholderTextColor="#95969D" 
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <View style={styles.filterContainer}>
          <Image source={require('../assets/icons8-filter-24.png')} style={styles.filterIcon} />
        </View>
      </View>
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleLeft}>
          Featured Jobs
        </Text>
        <Text style={styles.titleRight}>
          See all
        </Text>
      </View>
      
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={item => item.id}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer} 
      />

      <View style={styles.titleContainer}>
        <Text style={styles.titleLeft}>
          Popular Jobs
        </Text>
        <Text style={styles.titleRight}>
          See all
        </Text>
      </View>

      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <PopularJobCard job={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.popularJobsContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFD',
    flex: 1,
    padding: 16,
  },
  imageTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  upperText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#0D0D26',
  },
  lowerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.015,
    textAlign: 'left',
    color: '#95969D',
  },
  imageContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    overflow: 'hidden',
  },
  imageItSelf: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  filterContainer: {
    padding: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  titleRight: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'left',
    color: '#95969D',
  },
  titleLeft: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    lineHeight: 20.8,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#0D0D26',
  },
  card: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: 280,
    height: 186,
    justifyContent: 'space-between',
  },
  upperContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upperIconContainer: {
    width: 46,
    height: 46,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    lineHeight: 20.8,
    letterSpacing: -0.01,
    textAlign: 'left',
  },
  description: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_400Regular',
  },
  lowerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textDesign: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 4,
  },
  popularJobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
  },
  popularJobImageContainer: {
    marginRight: 16,
  },
  popularJobImage: {
    width: 50,
    height: 50,
  },
  popularJobText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  popularJobUpperText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    lineHeight: 18.2,
    textAlign: 'left',
    color: '#0D0D26',
  },
  popularJobLowerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    lineHeight: 20.8,
    textAlign: 'left',
    color: '#0D0D26',
    opacity: 0.5,
  },
  popularJobsContainer: {
    paddingHorizontal: 4,
  },
});

export default HomeScreen;
