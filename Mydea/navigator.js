import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Inicio from './screens/Inicio';
import Header from './screens/Header';
import Crear_negocio_info from './screens/Crear_negocio_info';
import Perfil from './screens/Perfil';
import Inicio_sesión from './screens/Inicio_sesión';
import Registro from './screens/Registro';
import Añadir_producto from './screens/añadir_producto';
import Terminos_condiciones from './screens/Terminos_condiciones';
import Aviso_privacidad from './screens/Aviso_privacidad';
import Datos_Contacto from './screens/Datos_contacto';
import Mis_negocio from './screens/Mis_negocios';
import Negocio from './screens/Negocio';
import Busqueda from './screens/Busqueda';


const NavInicio = createNativeStackNavigator();

function Nav_Inicio() {
    return(
        <NavInicio.Navigator>
            <NavInicio.Screen 
            name="Inicio" 
            component={Inicio}
            options={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
            })}/>
            <NavInicio.Screen 
            name="Negocio" 
            component={Negocio}
            options={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
            })} />
            <NavInicio.Screen 
            name="Busqueda" 
            component={Busqueda}
            options={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
            })} />
        </NavInicio.Navigator>
    );
}

const NavPerfil = createNativeStackNavigator();

function Nav_Perfil() {
    return(
        <NavPerfil.Navigator>
            <NavPerfil.Screen name="Perfil" component={Perfil}
            options={{headerShown: false}} />
            <NavPerfil.Screen name="Inicio_sesión" component={Inicio_sesión} 
            options={{headerShown: false}}/>
            <NavPerfil.Screen name="Registro" component={Registro} 
            options={{headerShown: false}}/>
            <NavPerfil.Screen name="Terminos_condiciones" component={Terminos_condiciones} 
            options={{headerShown: false}}/>
            <NavPerfil.Screen name="Aviso_privacidad" component={Aviso_privacidad} 
            options={{headerShown: false}}/>
            <NavPerfil.Screen name="Datos_Contacto" component={Datos_Contacto} 
            options={{headerShown: false}}/>
            <NavPerfil.Screen name="Mis_negocio" component={Mis_negocio} 
            options={{headerShown: false}}/>
            <NavInicio.Screen name="Crear_negocio_info" component={Crear_negocio_info} 
            options={{ header: () => <Header />, }}/>
            <NavInicio.Screen name="Añadir_producto" component={Añadir_producto} 
            options={{headerShown: false}}/>
        </NavPerfil.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Nav_Inicio') {
                        iconName =  'home';
                    }else if (route.name === 'Nav_Perfil'){
                        iconName = focused ? 'user-circle' : 'user-circle-o';
                    }

                // You can return any component that you like here!
                    return <FontAwesome name={iconName} size={35} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name='Nav_Inicio' component={Nav_Inicio}></Tab.Screen>
                <Tab.Screen name='Nav_Perfil' component={Nav_Perfil}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
