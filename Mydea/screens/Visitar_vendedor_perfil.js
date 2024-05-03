import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, Alert, Linking, TextInput, Button} from 'react-native';
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Visitar_vendedor_perfil({navigation}) {

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

    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <LinearGradient 
                style={styles.containerMorado}
                colors={['#803357', '#81345e', '#742e5d', '#641d54', '#530a4c', '#440046', '#350043']}
                start={[0, 0]}
                end={[1, 1]}>
                    <View style={styles.contenedor_perfil}>
                        <View style={styles.contenedor_amarillo}></View>
                        <Image source={{uri : 'https://i.pinimg.com/736x/36/73/84/367384f863f1df569d20e3ec1c7c37ac--diego-brando-text-posts.jpg'}} style={styles.imagen_perfil}></Image>
                        <Text style={[styles.nombre_propietario, {marginTop: 70}]}>Nombre</Text>
                        <View style={styles.contenedor_datos}>
                            <View style={[styles.info_perfil]}>
                                <Text style={styles.nombre_propietario}>1</Text>
                                <Text style={styles.texto_info_perfil}>Número de negocios</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contenedorInfo}>
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
                    </View>
                </LinearGradient>
                <View style={{backgroundColor: '#fff'}}>
                    <Text style={[styles.textoSub, {color: '#000', fontWeight: 'bold', margin: '5%'}]}>Sus Negocios</Text>
                    <View style={[{backgroundColor: '#ced4da', padding: 10, margin: '2%', borderRadius: 10,}]}>
                        <View style={styles.contenedor_negocio} onPress={() => navigation.navigate('Negocio')}>
                            <View 
                            style={styles.contImgNom}>
                                <Image style={styles.imagen_negocio} source={{uri: 'https://ih1.redbubble.net/image.3015036228.4538/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}}></Image>
                                <View style={styles.ContBlanco}></View>
                            </View>
                            <View style={styles.contDatos}>
                                <Text style={styles.textoNombreNegocio}>Nombre del negocio</Text>
                                <Text style={styles.TextoDescNeg}>Somos una cafeteria donde podras interactuar con gatitos mientras degustas una amplia variedad de cafes u otro tipo de bebidas, complementando con postres de todo tipo</Text>
                                <Pressable style={styles.botonVisitar} onPress={() => navigation.navigate('Negocio')}>
                                    <Text style={styles.textoVisitar}>Visitar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenedorInfo: {
        margin: '5%',
        marginBottom: 6,
    },
    textoSub: {
        fontSize: 33,
        fontFamily: 'InriaSans',
        color: '#fff',
    },
    contenedor_perfil: {
        width: '90%,',
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
    contenedor_amarillo: {
        backgroundColor: 'rgba(255, 196, 0, 0.8)',
        width: '100%',
        height: 75,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    imagen_perfil: {
        width: 150,
        height: 150,
        borderRadius: 100,
        position: 'absolute',
        top: 7,
        borderColor: 'rgba(231, 220, 226, 0.8)',
        borderWidth: 4,
    },
    nombre_propietario: {
        fontSize: 33,
        fontFamily: 'InriaSans',
        fontWeight: '600',
    },
    contenedor_datos: {
        flexDirection: 'row',
        border: 'solid',
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderTopWidth: 2,
    },
    info_perfil: {
        alignItems: 'center',
        marginHorizontal: 5,
        flex: 1,
    },
    texto_info_perfil: {
        fontSize: 15,
        fontFamily: 'InriaSans',
        fontWeight: '600',
    },
    borde_bajo: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderBottomWidth: 2,
    },
    contenedor_perfil: {
        width: '100%',
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
    containerMorado: {
        width: WIDTH,
        padding: 20,        
    },
    contenedor_contactos: {
        flexDirection: 'row',
    },
    contenedor_negocio: {
        flexDirection: 'column',
        border: 'solid',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#803357',
        marginVertical: 10,
    },
    imagen_negocio: {
        width: 160,
        height: 120,
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 4,
        zIndex: 10,
    },
    textoNombreNegocio: {
        //textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'InriaSans',
        color: '#fff',
        marginBottom: 10,
        //width: 120,
    },
    contImgNom: {
        alignItems: 'center',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    contDatos: {
        flex: 2,
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    TextoDescNeg: {
        fontSize: 15,
        fontFamily: 'InriaSans',
        color: '#fff',
    },
    botonVisitar: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '50%',
        marginVertical: 10,
        border: 'solid',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
    },
    textoVisitar: {
        fontSize: 20,
        fontFamily: 'InriaSans',
        color: '#000',
    },
    ContBlanco: {
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        width: '107%',
        height: 100,
        borderRadius: 10,
    },
});

export default Visitar_vendedor_perfil;