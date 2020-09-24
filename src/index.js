import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

import Header from './components/Header';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
    <NavigationContainer>
      <Header />
        <Navigation></Navigation>
    </NavigationContainer>
    </>
  );
}

