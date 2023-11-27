import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Perfil_usuario from './Perfil_usuario';

function Perfil({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [sin_sesion, setSin_sesion] = useState(true);
    const [sesion_usuario, setSesion_usuario] = useState(false);
    const [sesion_vendedor, setSesion_vendedor] = useState(false);

    if (!fontsLoaded) {
        return undefined;
    }

    const handleSesionUsuario = () => {
        setSesion_usuario(true);
        setSin_sesion(false);
        setSesion_vendedor(false);
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {sin_sesion && (
                    <View>
                        <Text style={styles.title}>Inicia sesión para obtener la mejor experiencia</Text>
                        <TouchableOpacity style={[styles.boton, {backgroundColor:'rgba(244, 55, 112, 1)'}]} onPress={() => navigation.navigate('Inicio_sesión')}>
                            <Text style={[styles.texto_boton, {color: '#fff'}]}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} onPress={() => navigation.navigate('Registro')}>
                            <Text style={[styles.texto_boton]}>Crear Cuenta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} onPress={handleSesionUsuario}>
                            <Text style={[styles.texto_boton]}>Mostrar Perfil Usuario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} >
                            <Text style={[styles.texto_boton]}>Mostrar Perfil Vendedor</Text>
                        </TouchableOpacity>
                        <Text style={{flex: 1, width: 350}}>Los botones de mostrar perfil estan de a mientras, después se quitan, la idea es que una vez inicie sesión le muestre su perfil, ya sea como usuario o como vendedor</Text>
                    </View>
                )}
                {sesion_usuario && (
                    <Perfil_usuario navigation={navigation}></Perfil_usuario>
                )}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'InriaSans',
        fontSize: 40,
        margin: 10,
        color: '#000',
        textAlign: 'justify',
    },
    boton: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        height: 50,
        margin: 6,
        borderRadius: 10,
    },
    boton_crear:{
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
    },
    texto_boton: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
    },
});

export default Perfil;