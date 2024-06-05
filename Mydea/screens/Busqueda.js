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

function Busqueda({route, navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });
    const [general, setGeneral] = useState(true);
    const [productosFiltro, setProductosFiltro] = useState(false);
    const [negociosFiltro, setNegociosFiltro] = useState(false);
    const [usuariosFiltro, setUsuariosFiltro] = useState(false);

    const {negocios} = route.params;
    const {searchTerm} = route.params;

    const vendedores = negocios.filter(item => item && item.tipo === 'Vendedor');
    const usuarios = negocios.filter(item => item && item.tipo === 'Usuario');
    const productos = negocios.filter(item => item && item.tipo === 'Producto');
    const Negocios = negocios.filter(item => item && item.tipo === 'Negocio');


    const pressGeneral = async () => {
        setGeneral(true);
        setProductosFiltro(false);
        setNegociosFiltro(false);
        setUsuariosFiltro(false);
    };
    const pressProductos = async () => {
        setGeneral(false);
        setProductosFiltro(true);
        setNegociosFiltro(false);
        setUsuariosFiltro(false);
    };
    const pressNegocios = async () => {
        setGeneral(false);
        setProductosFiltro(false);
        setNegociosFiltro(true);
        usuariosFiltro(false);
    };
    const pressUsuarios = async () => {
        setGeneral(false);
        setProductosFiltro(false);
        setNegociosFiltro(false);
        setUsuariosFiltro(true);
    };
    if (!fontsLoaded) {
        return undefined;
    }
    return(
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoBusqueda}>"{searchTerm}"</Text>
                    <ScrollView style={styles.contenedor_filtros} horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={[styles.filtro, general && styles.filtro_activo]} onPress={pressGeneral}><Text style={[styles.textoFiltro, general && styles.textoFiltro_activo]}>General</Text></Pressable>
                        <Pressable style={[styles.filtro, productosFiltro && styles.filtro_activo]} onPress={pressProductos}><Text style={[styles.textoFiltro, productosFiltro && styles.textoFiltro_activo]}>Productos</Text></Pressable>
                        <Pressable style={[styles.filtro, negociosFiltro && styles.filtro_activo]} onPress={pressNegocios}><Text style={[styles.textoFiltro, negociosFiltro && styles.textoFiltro_activo]}>Negocios</Text></Pressable>
                        <Pressable style={[styles.filtro, usuariosFiltro && styles.filtro_activo]} onPress={pressUsuarios}><Text style={[styles.textoFiltro, usuariosFiltro && styles.textoFiltro_activo]}>Usuarios</Text></Pressable>
                    </ScrollView>
                </View>
                {general || negociosFiltro ? (
                    <View style={styles.contenedorInfo}>
                        {Negocios.map((negocio) => (
                            <Pressable key={negocio.id} style={styles.contenedor_negocio} onPress={() => navigation.navigate('Negocio',{ negocioId: negocio.id })}>
                                <View style={styles.contImgNom}>
                                    <Image style={styles.imagen_negocio} source={{uri: negocio.logo}}></Image>
                                </View>
                                <View style={styles.contDatos}>
                                    <Text style={styles.textoNombreNegocio}>{negocio.nombre}</Text>
                                    <View style={styles.contIconTexto}>
                                        <View style={styles.containerIcon}>
                                            <IonIcons style={styles.icon} name='location-sharp' size={25}></IonIcons>
                                        </View>
                                        <Text style={styles.textoinfo}>{negocio.calle} {negocio.numero}, {negocio.colonia}, {negocio.cp}.</Text>
                                    </View>
                                    <View style={styles.contIconTexto}>
                                        <View style={styles.containerIcon}>
                                            <MaterialCommunityIcons style={styles.icon} name='heart' size={25}></MaterialCommunityIcons>
                                        </View>
                                        <Text style={styles.textoinfo}>{negocio.likes}</Text>
                                        <View style={styles.containerIcon}>
                                            <MaterialCommunityIcons style={styles.icon} name='comment-processing' size={25}></MaterialCommunityIcons>
                                        </View>
                                        <Text style={styles.textoinfo}>{negocio.comentarios}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                ): null}
                {general || usuariosFiltro ? (
                    <View style={[ {marginHorizontal: '5%'}]}>
                        {vendedores.map((vendedor) => (
                            <View key={vendedor.id}>
                                <Image style={styles.ImgUsuVendedor} source={{uri: vendedor.foto}}></Image>
                                <Pressable style={styles.ContUsuVendedor} onPress={() => navigation.navigate('Visitar_vendedor_perfil')}>
                                    <Text style={styles.textoNombreUsuario}>{vendedor.nombre}</Text>
                                    <Text style={styles.TextoDescNeg}>{vendedor.descripcion}</Text>
                                    <Entypo style={styles.iconoVendedor} name='shop' size={150}></Entypo>
                                </Pressable>
                            </View>
                        ))}
                        {usuarios.map((usuario) => (
                            <View key={usuario.id}>
                                <Image style={[styles.ImgUsuVendedor, styles.ImgUsuNormal]} source={{uri: usuario.foto}}></Image>
                                <Pressable style={[styles.ContUsuVendedor, styles.ContUsuNormal]} onPress={() => navigation.navigate('Visitar_Cuenta_Usuario')}>
                                    <Text style={styles.textoNombreUsuario}>{usuario.nombre}</Text>
                                    <Text style={styles.TextoDescNeg}>{usuario.descripcion}</Text>
                                    <FontAwesome style={[styles.iconoVendedor, styles.iconoUsuario]} name='user' size={150}></FontAwesome>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                ): null}
                {general || productosFiltro ? (
                    <>
                        {productos.map((producto) => (
                            <Pressable key={producto.id} style={styles.contenedorInfo} onPress={() => navigation.navigate('Negocio',{ negocioId: producto.negocioid })}>
                                <View style={styles.contProducto}>
                                    <View style={{flex: 1}}>
                                        <Image style={styles.imgProducto} source={{uri: producto.imagen}}></Image>
                                    </View>
                                    <View style={{flex: 2, alignItems: 'center',}}>
                                        <Text style={[styles.textoNombreNegocio, {textAlign: 'center', marginVertical: 5}]}>{producto.nombre}</Text>
                                        <Text style={[styles.TextoDescNeg, {textAlign: 'center', marginVertical: 5, paddingVertical: 10, width: '90%'}, styles.bordeProducto]}>{producto.descripcion}</Text>
                                        <Text style={[styles.TextoDescNeg, {textAlign: 'center', marginVertical: 5, paddingVertical: 10, fontWeight: 'bold'},]}>${producto.precio}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </>
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
        marginVertical: 5,
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
export default Busqueda;