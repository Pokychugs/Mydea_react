import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, Alert, Linking, TextInput, Button} from 'react-native';
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Visitar_Cuenta_Usuario({navigation}) {

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

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

    if (!fontsLoaded) {
        return undefined;
    }

    return(
        <View style={styles.container}>
            <View style={{flex: 2}}>
                <Image style={styles.imagenPerfil} source={{uri : 'https://static.wikia.nocookie.net/jojo/images/d/df/GyroP.png/revision/latest?cb=20170517003440&path-prefix=es'}}></Image>
            </View>
            <View style={[styles.contenedorInfo, {flex: 1}]}>
                <Text style={[styles.textoSub, {marginBottom: 10, textAlign: 'center'}]}>Contactos</Text>
                <View style={[styles.contenedor_perfil, styles.contenedor_contactos]}>
                    <View style={styles.info_perfil}>
                        <Feather name='phone' size={35} onPress={copyToClipboard}></Feather>
                    </View>
                    <View style={styles.info_perfil}>
                        <IonIcons name='mail' size={40} onPress={copyToClipboard_2}></IonIcons>
                    </View>
                    <View style={styles.info_perfil}>
                        <MaterialCommunityIcons name='facebook' size={40} onPress={handleOpenLink}></MaterialCommunityIcons>
                    </View>
                    <View style={styles.info_perfil}>
                        <MaterialCommunityIcons name='instagram' size={40} onPress={handleOpenLink_2}></MaterialCommunityIcons>
                    </View>
                    <View style={styles.info_perfil}>
                        <MaterialCommunityIcons name='twitter' size={40} onPress={handleOpenLink_3}></MaterialCommunityIcons>
                    </View>
                    <View style={styles.info_perfil}>
                        <MaterialCommunityIcons name='web' size={40} onPress={handleOpenLink_4}></MaterialCommunityIcons>
                    </View>
                </View>
                <Pressable style={[styles.ContenedorTexto, {flexDirection: 'row',}]} onPress={() => navigation.navigate('Resenas_hechas')}>
                    <Text style={styles.textoSub}>Reseñas hechas</Text> 
                    <IonIcons style={styles.iconoFlecha} name='arrow-forward' size={25}></IonIcons>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenPerfil: {
        height: 300,
        width: 300,
        borderRadius: 200,
        marginTop: '15%',
    },
    contenedorInfo: {
        margin: '5%',
        marginBottom: 6,
        width: '100%',
        alignItems: 'center',
    },
    ContenedorTexto: {
        width: '85%',
        marginTop: 25,
    },
    textoSub: {
        fontSize: 33,
        fontFamily: 'InriaSans',
        color: '#000',
    },
    contenedor_perfil: {
        width: '90%',
        height: 'auto',
        borderRadius: 10,
        border: 'solid',
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderWidth: 2,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    info_perfil: {
        alignItems: 'center',
        marginHorizontal: 5,
        flex: 1,
    },
    contenedor_contactos: {
        flexDirection: 'row',
    },
    iconoFlecha: {
        right: 25,
        top: 15,
        position: 'absolute',
    },
});

export default Visitar_Cuenta_Usuario;