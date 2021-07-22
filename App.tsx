import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { SignIn } from './src/screens/SignIn'
import { Background } from './src/components/Background';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Rajdhani_500Medium,
    Inter_400Regular,
    Inter_500Medium
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </Background>
  );
}


