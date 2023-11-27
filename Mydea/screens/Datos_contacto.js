import * as React from 'react';
import { View, Text, Image, StyleSheet, Linking, Alert} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Imagen_perfil from './Imagenes/perfil_icono.png';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';


function Datos_Contacto({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    const handleOpenLink = async () => {
        const url = 'https://www.facebook.com'; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_2 = async () => {
        const url = 'https://www.instagram.com'; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_3 = async () => {
        const url = 'https://twitter.com'; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_4 = async () => {
        const url = 'https://www.google.com'; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync('55 1689 3694');
        Alert.alert('Mensaje', 'Número copiado al portapapeles');
    };
    const copyToClipboard_2 = async () => {
        await Clipboard.setStringAsync('ejemplo@gmail.com');
        Alert.alert('Mensaje', 'Correo copiado al portapapeles');
    };

    return(
        <SafeAreaView style={styles.container}>
            <IonIcons style={styles.icon_log_out} name='arrow-back' size={35} onPress={() => navigation.goBack()}></IonIcons>
            <View style={{flexDirection: 'row', marginTop: 50}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                    <Image style={styles.Imagen_perfil} source={Imagen_perfil}></Image>
                </View>
                <View style={{flex: 3}}>
                    <Text style={styles.Nombre_usuario}>Nombre de usuario</Text>
                    <Text style={styles.Nombre_real}>Nombre real</Text>
                </View>
            </View>
            <View style={{margin: 20}}>
                <Text style={styles.texto_descripcion}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis! Voluptates ea corrupti, nisi odio ullam voluptatibus delectus, praesentium accusamus laboriosam quas quae commodi illo cum neque qui molestiae maiores!</Text>
            </View>
            <View style={{width: '90%',marginTop:10, flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <FontAwesome style={styles.icon_contacto} name='phone' size={40}></FontAwesome>
                    <IonIcons style={styles.icon_contacto} name='mail' size={35}></IonIcons>
                    <IonIcons style={styles.icon_contacto} name='logo-facebook' size={35}></IonIcons>
                    <FontAwesome style={styles.icon_contacto} name='instagram' size={35}></FontAwesome>
                    <FontAwesome style={styles.icon_contacto} name='twitter' size={35}></FontAwesome>
                    <MaterialCommunityIcons style={styles.icon_contacto} name='web' size={35}></MaterialCommunityIcons>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.texto_contacto} onPress={copyToClipboard}>55 1689 3694</Text>
                    <Text style={styles.texto_contacto} onPress={copyToClipboard_2}>ejemplo@gmail.com</Text>
                    <Text style={styles.texto_contacto} onPress={handleOpenLink}>Link</Text>
                    <Text style={styles.texto_contacto} onPress={handleOpenLink_2}>Link</Text>
                    <Text style={styles.texto_contacto} onPress={handleOpenLink_3}>Link</Text>
                    <Text style={styles.texto_contacto} onPress={handleOpenLink_4}>Link</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Imagen_perfil: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    Nombre_usuario: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',  
    },
    Nombre_real: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 20,
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
        left: 15,
        top: 35,
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
    texto_descripcion: {
        fontFamily: 'InriaSans',
        textAlign: 'justify',
        fontSize: 17,
    },
    texto_contacto: {
        fontFamily: 'InriaSans',
        textAlign: 'justify',
        fontSize: 30,
        marginVertical: 10,
    },
    icon_contacto: {
        marginRight: 20,
        marginVertical: 10,
    },
});

export default Datos_Contacto;