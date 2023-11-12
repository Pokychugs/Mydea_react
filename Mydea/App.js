import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator';
import Inicio from './screens/Inicio';

export default function App() {
  return (
    <Navigator></Navigator>
  );
}
