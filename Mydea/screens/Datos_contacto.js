import  React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, Linking, Alert, ScrollView} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';
import { AuthContext } from './AuthContext';


function Datos_Contacto({navigation}) {

    const { usuarioContext } = useContext(AuthContext);

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    const handleOpenLink = async () => {
        const url = usuarioContext.facebook; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_2 = async () => {
        const url = usuarioContext.instagram; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_3 = async () => {
        const url = usuarioContext.twitter; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_4 = async () => {
        const url = usuarioContext.web; // URL externa que deseas abrir
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(usuarioContext.telefono);
        Alert.alert('Mensaje', 'Número copiado al portapapeles');
    };
    const copyToClipboard_2 = async () => {
        await Clipboard.setStringAsync(usuarioContext.correo);
        Alert.alert('Mensaje', 'Correo copiado al portapapeles');
    };

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <IonIcons style={styles.icon_log_out} name='arrow-back' size={35} onPress={() => navigation.goBack()}></IonIcons>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                        <Image style={styles.Imagen_perfil} source={{ uri: usuarioContext.foto }}></Image>
                    </View>
                    <View style={{flex: 3}}>
                        <Text style={styles.Nombre_usuario}>{usuarioContext.nombre}</Text>
                        <Text style={styles.Nombre_real}>{usuarioContext.nombreCompleto}</Text>
                    </View>
                </View>
                <View style={{margin: 20}}>
                    <Text style={styles.texto_descripcion}>{usuarioContext.descripcion}</Text>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <FontAwesome style={styles.icon_contacto} name='phone' size={40}></FontAwesome>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.texto_contacto} onPress={copyToClipboard}>{usuarioContext.telefono}</Text>
                    </View>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <IonIcons style={styles.icon_contacto} name='mail' size={35}></IonIcons>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <Text style={styles.texto_contacto} onPress={copyToClipboard_2}>{usuarioContext.correo}</Text>
                    </View>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <IonIcons style={styles.icon_contacto} name='logo-facebook' size={35}></IonIcons>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.texto_contacto} onPress={handleOpenLink}>{usuarioContext.facebook}</Text>
                    </View>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <FontAwesome style={styles.icon_contacto} name='instagram' size={35}></FontAwesome>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.texto_contacto} onPress={handleOpenLink_2}>{usuarioContext.instagram}</Text>
                    </View>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <FontAwesome style={styles.icon_contacto} name='twitter' size={35}></FontAwesome>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.texto_contacto} onPress={handleOpenLink_3}>{usuarioContext.twitter}</Text>
                    </View>
                </View>
                <View style={{width: '90%',marginTop:10, flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column'}}>
                        <MaterialCommunityIcons style={styles.icon_contacto} name='web' size={35}></MaterialCommunityIcons>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <Text style={styles.texto_contacto} onPress={handleOpenLink_4}>{usuarioContext.web}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
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
        top: 45,
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
        flexWrap: 'wrap',
        width: 300,
    },
    icon_contacto: {
        marginRight: 20,
        marginVertical: 10,
    },
});

export default Datos_Contacto;