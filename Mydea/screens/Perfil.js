import * as React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';

function Perfil({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Inicia sesión para obtener la mejor experiencia</Text>
                <View>
                    <TouchableOpacity style={[styles.boton, {backgroundColor:'rgba(244, 55, 112, 1)'}]} onPress={() => navigation.navigate('Inicio_sesión')}>
                        <Text style={[styles.texto_boton, {color: '#fff'}]}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boton, styles.boton_crear]}>
                        <Text style={[styles.texto_boton]}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
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