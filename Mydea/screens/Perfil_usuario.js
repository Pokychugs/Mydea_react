import * as React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import Imagen_perfil from './Imagenes/perfil_icono.png';
import IonIcons from 'react-native-vector-icons/Ionicons';

function Perfil_usuario({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return(
        
        <View style={styles.container}>
            <IonIcons style={styles.icon_log_out} name='log-out' size={35}></IonIcons>
            <Image style={styles.Imagen_perfil} source={Imagen_perfil}></Image>
            <Text style={styles.Nombre_usuario}>Nombre de usuario</Text>
            <Text style={styles.Nombre_real}>Nombre real</Text>
            <View style={styles.contenedor_contacto}>
                <Text style={styles.Contacto} onPress={() => navigation.navigate('Datos_Contacto')}>Datos de contacto<IonIcons style={styles.icon_log_out} name='arrow-forward' size={22}></IonIcons></Text>
            </View>
            <TouchableOpacity style={styles.boton_crear}>
                <Text style={styles.texto_boton}>Editar Perfil</Text>
            </TouchableOpacity>
            <View style={{width: '90%',marginTop:10, flexDirection: 'row'}}>
                <View>
                    <Text style={[styles.texto_reseñas, styles.texto_reseñas_focused]} >Reseñas hechas</Text>
                </View>
                <View>
                    <Text style={styles.texto_reseñas}>Guardados</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Imagen_perfil: {
        width: 150,
        height: 150,
        marginTop: 50,
        borderRadius: 100,
    },
    Nombre_usuario: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',  
    },
    Nombre_real: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 25,
    },
    contenedor_contacto: {
        borderColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 2,
    },
    Contacto: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 25,
    },
    icon_log_out: {
        right: 0.5,
        top: 20,
        position: 'absolute',
    },
    boton_crear:{
        width: 300,
        alignItems: 'center', 
        justifyContent: 'center',
        height: 50,
        margin: 6,
        borderRadius: 10,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        marginTop: 20,
        backgroundColor: '#000',
    },
    texto_boton: {
        fontFamily: 'InriaSans',
        fontSize: 23,
        marginHorizontal: 5,
        color: '#fff',
    },
    texto_reseñas: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    texto_reseñas_focused: {
        borderColor: '#000',
        borderStyle:'solid',
        borderBottomWidth: 5,
        borderRadius: 5,
    },
});

export default Perfil_usuario;