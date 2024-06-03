# Comandos para que funcione el back
* npm init -y
* npm install pg
* npm i express
* npm install nodemon
* npm i cors
* npm install @react-navigation/native
* npm install bcrypt
* npm install moment
* npm install axios

* Código de  la pantalla búsqueda, tu front: A ver si lo puedes implementar de nuevo
/*
import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, Alert, Linking, TextInput, Button} from 'react-native';
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


function Busqueda({navigation}) {

    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [general, setGeneral] = useState(true);
    const [productos, setProductos] = useState(false);
    const [negocios, setNegocios] = useState(false);
    const [usuarios, setUsuarios] = useState(false);

    const pressGeneral = async () => {
        setGeneral(true);
        setProductos(false);
        setNegocios(false);
        setUsuarios(false);
    };

    const pressProductos = async () => {
        setGeneral(false);
        setProductos(true);
        setNegocios(false);
        setUsuarios(false);
    };

    const pressNegocios = async () => {
        setGeneral(false);
        setProductos(false);
        setNegocios(true);
        setUsuarios(false);
    };

    const pressUsuarios = async () => {
        setGeneral(false);
        setProductos(false);
        setNegocios(false);
        setUsuarios(true);
    };

    if (!fontsLoaded) {
        return undefined;
    }

    return(
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoBusqueda}>""</Text>
                    <ScrollView style={styles.contenedor_filtros} horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={[styles.filtro, general && styles.filtro_activo]} onPress={pressGeneral}><Text style={[styles.textoFiltro, general && styles.textoFiltro_activo]}>General</Text></Pressable>
                        <Pressable style={[styles.filtro, productos && styles.filtro_activo]} onPress={pressProductos}><Text style={[styles.textoFiltro, productos && styles.textoFiltro_activo]}>Productos</Text></Pressable>
                        <Pressable style={[styles.filtro, negocios && styles.filtro_activo]} onPress={pressNegocios}><Text style={[styles.textoFiltro, negocios && styles.textoFiltro_activo]}>Negocios</Text></Pressable>
                        <Pressable style={[styles.filtro, usuarios && styles.filtro_activo]} onPress={pressUsuarios}><Text style={[styles.textoFiltro, usuarios && styles.textoFiltro_activo]}>Usuarios</Text></Pressable>
                    </ScrollView>
                </View>
                {general || negocios ? (
                    <View style={styles.contenedorInfo}>
                        <Pressable style={styles.contenedor_negocio} onPress={() => navigation.navigate('Negocio')}>
                            <View style={styles.contImgNom}>
                                <Image style={styles.imagen_negocio} source={{uri: 'https://ih1.redbubble.net/image.3015036228.4538/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}}></Image>
                            </View>
                            <View style={styles.contDatos}>
                                <Text style={styles.textoNombreNegocio}>Nombre del negocio</Text>
                                <View style={styles.contIconTexto}>
                                    <View style={styles.containerIcon}>
                                        <IonIcons style={styles.icon} name='location-sharp' size={25}></IonIcons>
                                    </View>
                                    <Text style={styles.textoinfo}>Dirección del negocio</Text>
                                </View>
                                <View style={styles.contIconTexto}>
                                    <View style={styles.containerIcon}>
                                        <MaterialCommunityIcons style={styles.icon} name='heart' size={25}></MaterialCommunityIcons>
                                    </View>
                                    <Text style={styles.textoinfo}>00</Text>
                                    <View style={styles.containerIcon}>
                                        <MaterialCommunityIcons style={styles.icon} name='comment-processing' size={25}></MaterialCommunityIcons>
                                    </View>
                                    <Text style={styles.textoinfo}>00</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                ): null}
                {general || usuarios ? (
                    <View style={[ {marginHorizontal: '5%'}]}>
                        <Image style={styles.ImgUsuVendedor} source={{uri: 'https://i.pinimg.com/736x/36/73/84/367384f863f1df569d20e3ec1c7c37ac--diego-brando-text-posts.jpg'}}></Image>
                        <Pressable style={styles.ContUsuVendedor} onPress={() => navigation.navigate('Visitar_vendedor_perfil')}>
                            <Text style={styles.textoNombreUsuario}>Nombre de usuario</Text>
                            <Text style={styles.TextoDescNeg}>Descripción</Text>
                            <Entypo style={styles.iconoVendedor} name='shop' size={150}></Entypo>
                        </Pressable>
                        <Image style={[styles.ImgUsuVendedor, styles.ImgUsuNormal]} source={{uri: 'https://static.wikia.nocookie.net/jojo/images/d/df/GyroP.png/revision/latest?cb=20170517003440&path-prefix=es'}}></Image>
                        <Pressable style={[styles.ContUsuVendedor, styles.ContUsuNormal]} onPress={() => navigation.navigate('Visitar_Cuenta_Usuario')}>
                            <Text style={styles.textoNombreUsuario}>Nombre de usuario</Text>
                            <Text style={styles.TextoDescNeg}>Descripción</Text>
                            <FontAwesome style={[styles.iconoVendedor, styles.iconoUsuario]} name='user' size={150}></FontAwesome>
                        </Pressable>
                    </View>
                ): null}
                {general || productos ? (
                    <Pressable style={styles.contenedorInfo} onPress={() => navigation.navigate('Negocio')}>
                        <View style={styles.contProducto}>
                            <View style={{flex: 1}}>
                                <Image style={styles.imgProducto} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'}}></Image>
                            </View>
                            <View style={{flex: 2, alignItems: 'center',}}>
                                <Text style={[styles.textoNombreNegocio, {textAlign: 'center', marginVertical: 5}]}>Nombre del producto</Text>
                                <Text style={[styles.TextoDescNeg, {textAlign: 'center', marginVertical: 5, paddingVertical: 10, width: '90%'}, styles.bordeProducto]}>Descripción del producto</Text>
                                <Text style={[styles.TextoDescNeg, {textAlign: 'center', marginVertical: 5, paddingVertical: 10, fontWeight: 'bold'},]}>$00.00</Text>
                            </View>
                        </View>
                    </Pressable>
                ): null}
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
    textoBusqueda: {
        fontSize: 45,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contenedorInfo: {
        margin: '5%',
        marginBottom: 6,
    },
    contenedor_filtros: {
        marginBottom: 10,
    },
    filtro: {
        backgroundColor: '#fff',
        borderRadius: 18,
        marginHorizontal: 10,
        padding: 10,
        height: 'auto',
    },
    filtro_activo: {
        backgroundColor: '#fb7356',
        height: 'auto',
    },
    textoFiltro: {
        fontSize: 16,
        fontFamily: 'InriaSans',
    },
    textoFiltro_activo: {
        color: '#fff',
    },
    contenedor_negocio: {
        flexDirection: 'column',
    },
    imagen_negocio: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 4,
    },
    textoNombreNegocio: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'InriaSans',
        color: '#000',
        //width: 120,
    },
    contImgNom: {
        backgroundColor: 'rgb(187, 60, 120)',
        alignItems: 'center',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        justifyContent: 'center',
    },
    contDatos: {
        flex: 2,
        backgroundColor: '#fff',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    TextoDescNeg: {
        fontSize: 20,
        fontFamily: 'InriaSans',
    },
    containerIcon: {
        backgroundColor: '#a23d7b',
        borderRadius: 100,
        padding: 2,
        width: '100%',
        marginRight: 5,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: '#fff',
    },
    contIconTexto: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textoinfo: {
        fontSize: 16,
        fontFamily: 'InriaSans',
        flex: 1,
    },
    ImgUsuVendedor: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: 'rgb(151, 26, 64)',
        borderWidth: 4,
        position: 'relative',
        top: 30,
        left: 10,
        zIndex: 5,
    },
    ContUsuVendedor: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 20,
        borderColor: 'rgb(151, 26, 64)',
        borderWidth: 4,
        borderStyle: 'solid',
        padding: 10,
        height: 150,
        overflow: 'hidden',
    },
    textoNombreUsuario: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'InriaSans',
        color: '#000',
        marginTop: 20,
    },
    iconoVendedor: {
        color: 'rgba(151, 26, 64, 0.5)',
        position: 'absolute',
        right: -50,
        bottom: -30,
    },
    ImgUsuNormal: {
        borderColor: '#D95538',
    },
    ContUsuNormal: {
        borderColor: '#D95538',
    },
    iconoUsuario: {
        color: 'rgba(217, 85, 56, 0.5)',
        right: -40,
    },
    contProducto: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#f58b4f',
        borderWidth: 4,
        borderStyle: 'solid',
        borderLeftWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgProducto: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: '#000',
        borderWidth: 4,
    },
    bordeProducto: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderBottomWidth: 3,
        borderStyle: 'solid',
    },
});

export default Busqueda; */