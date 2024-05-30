import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigator';
import Inicio from './screens/Inicio';
import { AuthProvider } from './screens/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigator></Navigator>
    </AuthProvider>
  );
}
