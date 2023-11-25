import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './screens/Inicio';
import Header from './screens/Header';
import Crear_negocio_info from './screens/Crear_negocio_info';
import Crear_negocio_formulario from './screens/Crear_negocio_formulario';
import Perfil from './screens/Perfil';
import Inicio_sesión from './screens/Inicio_sesión';
import Registro from './screens/Registro';
import Añadir_producto from './screens/añadir_producto';
import Terminos_condiciones from './screens/Terminos_condiciones';
import Aviso_privacidad from './screens/Aviso_privacidad';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Footer() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Inicio}
            options={{ header: () => <Header />, }} 
            />
            <Tab.Screen name="Perfil" component={Perfil}
            options={{ header: () => <Header />, }} 
            />
        </Tab.Navigator>
    );
}


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Footer" component={Footer} options={{headerShown: false}}/>
                <Stack.Screen name="Crear_negocio_info" component={Crear_negocio_info} 
                options={{ header: () => <Header />, }}/>
                <Stack.Screen name="Crear_negocio_formulario" component={Crear_negocio_formulario} 
                options={{headerShown: false}}/>
                <Stack.Screen name="Añadir_producto" component={Añadir_producto} 
                options={{headerShown: false}}/>
                <Stack.Screen name="Inicio_sesión" component={Inicio_sesión} 
                options={{headerShown: false}}/>
                <Stack.Screen name="Registro" component={Registro} 
                options={{headerShown: false}}/>
                <Stack.Screen name="Terminos_condiciones" component={Terminos_condiciones} 
                options={{headerShown: false}}/>
                <Stack.Screen name="Aviso_privacidad" component={Aviso_privacidad} 
                options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
