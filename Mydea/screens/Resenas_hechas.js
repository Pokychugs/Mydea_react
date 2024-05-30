import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, Alert, Linking, TextInput, Button} from 'react-native';
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Resenas_hechas({navigation}) {

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <View 
                style={styles.containerMorado}>
                    <View style={styles.contenedor_perfil}>
                        <View style={styles.contenedor_amarillo}></View>
                        <Image source={{uri : 'https://static.wikia.nocookie.net/jojo/images/d/df/GyroP.png/revision/latest?cb=20170517003440&path-prefix=es'}} style={styles.imagen_perfil}></Image>
                        <Text style={[styles.nombre_propietario, {marginTop: 70}]}>Nombre</Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#fff', flex: 1,}}>
                    <Text style={[styles.textoSub, { fontWeight: 'bold', margin: '5%'}]}>Reseñas Hechas</Text>
                    <View style={[{backgroundColor: '#ced4da', padding: 10, margin: '2%', borderRadius: 10}]}>
                        <View style={styles.contenedor_negocio}>
                            <View style={styles.contImgNom}>
                                <Image style={styles.imagen_negocio} source={{uri: 'https://ih1.redbubble.net/image.3015036228.4538/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}}></Image>
                                <View style={styles.ContBlanco}></View>
                            </View>
                            <View style={styles.contDatos}>
                                <Text style={styles.textoNombreNegocio}>Nombre del negocio</Text>
                                <View style={{flexDirection:'row', marginVertical: 5,}}>
                                    <FontAwesome name='quote-left' size={30}></FontAwesome>
                                    <Text style={[styles.TextoDescNeg, {fontStyle: 'italic'}]}>Contenido de la reseña</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <MaterialCommunityIcons name='heart' size={30}></MaterialCommunityIcons>
                                    <Text style={styles.TextoDescNeg}>Le gustó</Text>
                                </View>
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
        color: '#000',
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
        backgroundColor: '#D95538',        
    },
    contenedor_contactos: {
        flexDirection: 'row',
    },
    contenedor_negocio: {
        flexDirection: 'row',
        border: 'solid',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
    },
    imagen_negocio: {
        width: 120,
        height: 120,
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 2,
        zIndex: 10,
    },
    textoNombreNegocio: {
        //textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'InriaSans',
        color: '#000',
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
        marginLeft: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    TextoDescNeg: {
        fontSize: 20,
        fontFamily: 'InriaSans',
        color: '#000',
        width: '90%',
        marginLeft: 5,
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
        backgroundColor:'rgb(91, 29, 99)',
        position: 'absolute',
        height: '140%',
        width: 100,
        borderRadius: 10,
    },
});

export default Resenas_hechas;