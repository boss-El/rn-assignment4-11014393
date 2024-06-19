import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulating font loading completion
    }, 2000); // Adjust delay as needed
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
        {/* You can optionally add a spinner or animation here */}
      </View>
    );
  }

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textDesign}>Jobizz</Text>
      <View style={styles.welcomeContainer}>
        <Text style={styles.headlineOne}>Welcome Back 👋</Text>
        <Text style={styles.headlineTwo}>Let’s log in. Apply to jobs!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#AFB0B6"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#AFB0B6"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.leftLine}></View>
        <Text style={styles.centerText}>Or continue with</Text>
        <View style={styles.rightLine}></View>
      </View>
      <View style={[styles.authContainer, { marginTop: 40, width: 216, height: 56, alignSelf: 'center' }]}>
        <TouchableOpacity style={styles.authIcon}>
          <Icon name="logo-apple" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.authIcon}>
          <Image source={require('../assets/7123025_logo_google_g_icon.png')} style={styles.googleLogo} />
        </View>
        <TouchableOpacity style={styles.authIcon}>
          <Icon name="logo-facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerContainer}>
        Haven’t an account? <Text style={styles.register}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFD',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDesign: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 33,
    letterSpacing: -0.02,
    textAlign: 'left',
    color: '#356899',
    marginVertical: 16,
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headlineOne: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 33.6,
    letterSpacing: -0.015,
    textAlign: 'left',
    color: '#0D0D26',
    marginBottom: 8,
  },
  headlineTwo: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22.4,
    letterSpacing: -0.01,
    textAlign: 'left',
    color: '#0D0D26',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 52,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AFB0B6',
    paddingHorizontal: 16,
    width: '100%', 
  },
  button: {
    height: 52,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30, 
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
  },
  centerText: {
    marginHorizontal: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    fontWeight: '400',
    color: '#AFB0B6',
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  authIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLogo: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  registerContainer: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17.71,
    textAlign: 'center',
    marginTop: 40, 
  },
  register: {
    color: '#356899',
    fontFamily: 'Poppins_400Regular',
  },
});

export default LoginScreen;
