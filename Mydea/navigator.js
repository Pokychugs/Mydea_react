import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './screens/Inicio';
import Header from './screens/Header';
import Crear_negocio_info from './screens/Crear_negocio_info';
import { createNativeStackNavigator, HeaderBackButton  } from '@react-navigation/native-stack';
import CustomDrawerContent from './screens/Drawer';
import Crear_negocio_formulario from './screens/Crear_negocio_formulario';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio}
                options={{ header: () => <Header />, }}/>
                <Stack.Screen name="Crear_negocio_info" component={Crear_negocio_info} 
                options={{ header: () => <Header />, }}/>
                <Stack.Screen name="Crear_negocio_formulario" component={Crear_negocio_formulario} 
                options={{header: () => <Header />,}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
