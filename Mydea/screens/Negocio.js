import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, Alert, Linking, TextInput, Button} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS, withTiming, SlideInDown, SlideOutDown, FadeIn, FadeOut,} from "react-native-reanimated";
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import imagen_perfil from './Imagenes/asa.jpg'
import * as Clipboard from 'expo-clipboard';
import Modal from "react-native-modal";
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



function Negocio({navigation, route}) {

    

    const { negocioId } = route.params;
    const [negocio, setNegocio] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [direccion, setDireccion] = useState([]);
    const [productos, setProductos] = useState([]);
    const [resenas, setResenas] = useState([]);
    
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [isFocused, setIsFocused] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible_2, setModalVisible_2] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const [general, setGeneral] = useState(false);
    const [menor_mayor, setMenor_mayor] = useState(false);
    const [mayor_menor, setMayor_menor] = useState(false);
    const [nuevos, setNuevos] = useState(false);
    const [antiguos, setAntiguos] = useState(false);
    const [disponibilidad, setDisponiblidad] = useState(false);


    useEffect(() => {
        const DatosNegocioIndividual = async () => {
            try {
                const response = await fetch(`http://192.168.1.77:3000/negocio/${negocioId}`);
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                const {negocio: negocioData, horario: horarioData, direccion: direccionData, producto: productoData, resena: resenaData} = await response.json();
                setNegocio(negocioData);
                setHorarios(horarioData);
                setDireccion(direccionData);
                setProductos(productoData);
                setResenas(resenaData);
            } catch (error) {
                console.error('Error al obtener datos del negocio:', error.message);
            }
        };
        DatosNegocioIndividual();
    }, []);

    useEffect(() => {
        /*console.log("Datos del negocio actualizados:", negocio);
        console.log("Horario actualizados:", horarios); 
        console.log("Direccion actualizados:", direccion);
        console.log("Productos actualizados:", productos);*/
        console.log("Reseñas actualizadas:", resenas);
    }, [negocio, horarios, direccion, productos, resenas]);

    const data = negocio.length > 0 ? [
        {
            id: '1',
            source: { uri: negocio[0]?.logo },
        },
        {
            id: '2',
            source: { uri: negocio[0]?.imagen_1 },
        },
        {
            id: '3',
            source: { uri: negocio[0]?.imagen_2 },
        },
        {
            id: '4',
            source: { uri: negocio[0]?.imagen_3 },
        },
    ] : [];

    const renderHorario = (horario) => {
        if (horario.especial !== 'No') {
            return <Text style={styles.textoEspecial}>{horario.especial}</Text>;
        }
        return (
            <Text style={styles.textoHorario}>
            {horario.abierto} - {horario.cerrado}
            </Text>
        );
    };

    const pressGeneral = async () => {
        setGeneral(true);
        setMenor_mayor(false);
        setMayor_menor(false);
        setNuevos(false);
        setAntiguos(false);
        setDisponiblidad(false);
    };

    const pressMenorMayor = async () => {
        setGeneral(false);
        setMenor_mayor(true);
        setMayor_menor(false);
        setNuevos(false);
        setAntiguos(false);
        setDisponiblidad(false);
    };

    const pressMayorMenor = async () => {
        setGeneral(false);
        setMenor_mayor(false);
        setMayor_menor(true);
        setNuevos(false);
        setAntiguos(false);
        setDisponiblidad(false);
    };

    const pressNuevos = async () => {
        setGeneral(false);
        setMenor_mayor(false);
        setMayor_menor(false);
        setNuevos(true);
        setAntiguos(false);
        setDisponiblidad(false);
    };

    const pressAntiguos = async () => {
        setGeneral(false);
        setMenor_mayor(false);
        setMayor_menor(false);
        setNuevos(false);
        setAntiguos(true);
        setDisponiblidad(false);
    };

    const pressDisponibilidad = async () => {
        setGeneral(false);
        setMenor_mayor(false);
        setMayor_menor(false);
        setNuevos(false);
        setAntiguos(false);
        setDisponiblidad(true);
    };

    if (!fontsLoaded) {
        return undefined;
    }


    const renderItem  = ({item, index}) => (
        <Image
            source={item.source}
            style={styles.image}
        />
    );


    const handleOpenLink = async () => {
        const url = negocio.length > 0 && negocio[0].facebook;
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_2 = async () => {
        const url = negocio.length > 0 && negocio[0].instagram;
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_3 = async () => {
        const url = negocio.length > 0 && negocio[0].twitter;
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };
    const handleOpenLink_4 = async () => {
        const url = negocio.length > 0 && negocio[0].web;
    
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`No se puede abrir el enlace: ${url}`);
        }
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(negocio.length > 0 && negocio[0].telefono);
        Alert.alert(negocio.length > 0 && negocio[0].telefono, 'Número copiado al portapapeles');
    };
    const copyToClipboard_2 = async () => {
        await Clipboard.setStringAsync(negocio.length > 0 && negocio[0].correo);
        Alert.alert(negocio.length > 0 && negocio[0].correo, 'Correo copiado al portapapeles');
    };

    const handleFocus = () => {
        setIsFocused(true);
    };
    
    const handleBlur = () => {
        setIsFocused(false);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModal_2 = () => {
        setModalVisible_2(!isModalVisible_2);
    };

    const getHorarioHoy = () => {
        const diaHoy = moment().format('dddd');
        const horarioHoy = horarios.find(
            (horario) => horario.dia.toLowerCase() === diaHoy.toLowerCase()
        );
        //console.log('Horario de hoy:', horarioHoy);
        return horarioHoy ? renderHorario(horarioHoy) : <Text>No disponible</Text>;
    };
    

    return(
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const newIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
                        setCurrentItemIndex(newIndex);
                    }}
                />
                <View style={styles.fondo_numero_img}>
                    <Text style={styles.texto_numero_img}>{currentItemIndex + 1}/4</Text>
                </View>
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoNombre}>{negocio.length > 0 && negocio[0].nombre}</Text>
                    <View style={styles.contenedorLikes}> 
                        <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                        <Text style={[styles.textoDescripcion, {marginLeft: 10}]}>00</Text>
                    </View>
                    <Text style={styles.textoDescripcion}>{negocio.length > 0 && negocio[0].descripcion}</Text>
                </View>
                <TouchableOpacity style={[styles.contenedorInfo, {flexDirection: 'row'}]} onPress={toggleModal_2}>
                    <Text style={styles.textoSub}>Horarios</Text> 
                    <IonIcons style={styles.iconoFlecha} name='arrow-forward' size={25}></IonIcons>
                </TouchableOpacity>
                <View style={{marginHorizontal: '5%'}}>
                    <Text style={styles.textoDescripcion}>Hoy: {getHorarioHoy()}</Text>
                </View>
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoSub}>Ubicación</Text>
                    <Text style={styles.textoDescripcion}>{direccion.length > 0 && direccion[0].calle} {direccion.length > 0 && direccion[0].numero}, {direccion.length > 0 && direccion[0].colonia}, {direccion.length > 0 && direccion[0].cp}.</Text>
                </View>
                <View style={[styles.contenedorInfo, {borderRadius: 10, overflow: 'hidden', marginTop: 4}]}>
                    <MapView style={styles.map} 
                        initialRegion={{
                            latitude: 19.25437953360486,
                            longitude: -99.05461822161988, 
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.00421,
                        }}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        rotateEnabled={false}
                        pointerEvents="none"
                    >
                        <Marker
                            coordinate={{latitude: 19.25437953360486, longitude: -99.05461822161988}}
                            title='Negocio'
                            description="Esta es la descripción de mi marcador"
                        />
                    </MapView>
                </View>
                <View style={styles.contenedorInfo}>
                    <Text style={[styles.textoSub, {marginBottom: 10}]}>Propietario</Text>
                    <View style={styles.contenedor_perfil}>
                        <View style={styles.contenedor_amarillo}></View>
                        <Image source={{ uri: negocio[0]?.foto }} style={styles.imagen_perfil}></Image>
                        <Text style={[styles.nombre_propietario, {marginTop: 70}]}>{negocio.length > 0 && negocio[0].usuario}</Text>
                        <View style={styles.contenedor_datos}>
                            <View style={[styles.info_perfil, styles.borde_medio]}>
                                <Text style={styles.nombre_propietario}>1</Text>
                                <Text style={styles.texto_info_perfil}>Número de negocios</Text>
                            </View>
                            <View style={styles.info_perfil}>
                                <Text style={styles.nombre_propietario}>1</Text>
                                <Text style={styles.texto_info_perfil}>Reseñas de otros usuarios</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorInfo}>
                    <Text style={[styles.textoSub, {marginBottom: 10}]}>Contactos del negocio</Text>
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
                <View style={styles.contenedorInfo}>
                    <Text style={[styles.textoSub, {marginBottom: 10}, styles.borde_bajo]}>Productos</Text>
                    <TextInput placeholder='Buscar un producto especifico' 
                    style={[styles.buscador_productos, {borderColor: isFocused ? '#000': 'rgba(139, 137, 138, 0.8) ', backgroundColor: isFocused ? '#fff' : '#f2f2f2'}]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}></TextInput>
                    <ScrollView style={styles.contenedor_filtros} horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={[styles.filtro, general && styles.filtro_activo]} onPress={pressGeneral}><Text style={[styles.textoFiltro, general && styles.textoFiltro_activo]}>General</Text></Pressable>
                        <Pressable style={[styles.filtro, menor_mayor && styles.filtro_activo]} onPress={pressMenorMayor}><Text style={[styles.textoFiltro, menor_mayor && styles.textoFiltro_activo]}>Menor a mayor precio</Text></Pressable>
                        <Pressable style={[styles.filtro, mayor_menor && styles.filtro_activo]} onPress={pressMayorMenor}><Text style={[styles.textoFiltro, mayor_menor && styles.textoFiltro_activo]}>Mayor a menor precio</Text></Pressable>
                        <Pressable style={[styles.filtro, nuevos && styles.filtro_activo]} onPress={pressNuevos}><Text style={[styles.textoFiltro, nuevos && styles.textoFiltro_activo]}>Nuevos productos</Text></Pressable>
                        <Pressable style={[styles.filtro, antiguos && styles.filtro_activo]} onPress={pressAntiguos}><Text style={[styles.textoFiltro, antiguos && styles.textoFiltro_activo]}>Productos antiguos</Text></Pressable>
                        <Pressable style={[styles.filtro, disponibilidad && styles.filtro_activo]} onPress={pressDisponibilidad}><Text style={[styles.textoFiltro, disponibilidad && styles.textoFiltro_activo]}>Disponibilidad</Text></Pressable>
                    </ScrollView>
                    <View style={styles.productos}>
                    {productos.map(producto => (
                        <Pressable 
                            key={producto.id} 
                            style={styles.contenedor_producto} 
                            onPress={() => {
                                setSelectedProduct(producto);
                                setModalVisible(true);
                            }}
                        >
                            <Image style={styles.imagen_producto} source={{ uri: producto.imagen }} />
                            <Text style={styles.textoPrecio}>${producto.precio}</Text>
                            <Text style={styles.texto_nombrepro}>{producto.nombre}</Text>
                        </Pressable>
                    ))}
                    </View>
                </View>
                <View style={styles.contenedorInfo}>
                    <Text style={[styles.textoSub, {marginBottom: 10}, styles.borde_bajo]}>Reseñas</Text>
                    {resenas.map(resena => (
                        <View key={resena.id} style={styles.resena}>
                            <View style={styles.fondo_nombre_resena}>
                                <Text style={styles.nombre_usuario}>{resena.nombre}</Text>
                            </View>
                            <View style={styles.border_imagen_usuario}>
                                <Image style={styles.imagen_usuario} source={{uri: resena.foto}}></Image>
                            </View>
                            {resena.like && (
                                <View style={styles.Container_slider}>
                                    <MaterialCommunityIcons style={styles.corazon_resena} name='heart' size={30}></MaterialCommunityIcons>
                                    <Text style={styles.texto_like}>Le gustó este negocio</Text>
                                </View>
                            )}
                            <Text style={styles.texto_resena}>{resena.comentario}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Modal 
                isVisible={isModalVisible} 
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
                useNativeDriverForBackdrop={true}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
            >
                {selectedProduct ? (
                    <View style={styles.contenedor_producto_modal}>
                        <Image style={styles.imagen_producto_modal} source={{ uri: selectedProduct.imagen }} />
                        <Text style={styles.texto_nombrepro_modal}>{selectedProduct.nombre}</Text>
                        <Text style={styles.textoPrecioModal}>${selectedProduct.precio}</Text>
                        <Text style={[styles.textoDescripcion, { textAlign: 'center' }]}>{selectedProduct.descripcion}</Text>
                        <Text style={styles.textoDisponibilidad}>{selectedProduct.disponibilidad}</Text>
                    </View>
                ) : (
                    <View style={styles.contenedor_producto_modal}>
                        <Text style={styles.texto_nombrepro_modal}>No se ha seleccionado ningún producto.</Text>
                    </View>
                )}
            </Modal>

            <Modal isVisible={isModalVisible_2} 
            style={{alignItems: 'center', justifyContent: 'center'}}
            onBackdropPress={() => setModalVisible_2(false)}
            onBackButtonPress={() => setModalVisible_2(false)}
            propagateSwipe={true}
            onSwipeStart={() => setModalVisible_2(false)}
            useNativeDriverForBackdrop = {true}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            animationInTiming={500}>
                <View style={[styles.sheet]} 
                    entering={SlideInDown.springify().damping(15)}
                    exiting={SlideOutDown}
                    >
                        <View>
                            <Text style={styles.textoSub}>Horarios</Text>
                        </View>
                        {horarios.map((horario, index) => (
                            <View key={index} style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>{horario.dia}</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>{renderHorario(horario)}</Text>
                            </View>
                        ))}
                </View>
            </Modal>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: WIDTH,
        height: HEIGHT * 0.3,
        resizeMode: 'cover',
    },
    textoNombre: {
        fontSize: 33,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
    },
    contenedorInfo: {
        margin: '5%',
        marginBottom: 6,
    },
    textoDescripcion: {
        fontSize: 23,
        fontFamily: 'InriaSans',
        textAlign: 'justify',
    },
    contenedorLikes: {
        flexDirection: 'row',
    },
    textoSub: {
        fontSize: 33,
        fontFamily: 'InriaSans',
    },
    contenedorHorUb: {
        borderColor: '#000',
        borderStyle:'solid',
    },
    iconoFlecha: {
        right: 20,
        top: 15,
        position: 'absolute',
    },
    sheet: {
        backgroundColor: "white",
        padding: 16,
        height: 'auto',
        width: WIDTH,
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 100,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
    },
    contenedorHorario: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    textoHora: {
        right: 20,
        position: 'absolute',
        fontFamily: 'InriaSans',
    },
    map: {
        width: '100%',
        height: 200,
        borderRadius: 10, 
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
    borde_medio: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderRightWidth: 2,
        paddingRight: 5,
    },
    borde_bajo: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderBottomWidth: 2,
    },
    contenedor_contactos: {
        flexDirection: 'row',
    },
    buscador_productos: {
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        fontSize: 20,
        paddingHorizontal: 10,
        fontFamily: 'InriaSans',
        marginBottom: 10,
    },
    contenedor_filtros: {
        marginBottom: 10,
    },
    filtro: {
        backgroundColor: '#fff',
        borderRadius: 18,
        marginHorizontal: 10,
        padding: 10,
    },
    filtro_activo: {
        backgroundColor: '#fb7356',
    },
    textoFiltro: {
        fontSize: 16,
        fontFamily: 'InriaSans',
    },
    textoFiltro_activo: {
        color: '#fff',
    },
    contenedor_producto: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: WIDTH * 0.42,
        margin: 5,
    },
    imagen_producto: {
        width: '100%,',
        height: 170,
        borderRadius: 10,
    },
    textoPrecio: {
        position: 'absolute',
        top: 15,
        left: 0,
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        fontSize: 16,
        fontFamily: 'InriaSans',
    },
    texto_nombrepro: {
        fontSize: 20,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    productos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contenedor_producto_modal: {
        borderColor: 'rgba(139, 137, 138, 0.8)',
        borderStyle:'solid',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        width: '100%',
        height: 'auto',
    },
    texto_nombrepro_modal: {
        fontSize: 40,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: '#ffb62e',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
    },
    textoPrecioModal: {
        fontSize: 40,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    textoDisponibilidad: {
        fontSize: 24,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#ffb62e',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    imagen_producto_modal: {
        width: '100%,',
        height: 250,
        borderRadius: 10,
    },
    resena: {
        borderRadius: 10,
        border: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderStyle:'solid',
        borderWidth: 2,
        backgroundColor: '#fff',
        height: 250,
        marginVertical: 5,
    },
    fondo_nombre_resena: {
        backgroundColor: 'rgb(151, 26, 64)',
        position: 'absolute',
        height: 'auto',
        width: '70%',
        top: 10,
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    nombre_usuario: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'InriaSans',
    },
    border_imagen_usuario: {
        borderColor: 'rgb(151, 26, 64)',
        borderWidth: 4,
        padding: 3,
        height: 80,
        width: 80,
        borderRadius: 100,
        position: 'absolute',
        top: 5,
        right: 10,
    },
    imagen_usuario: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    Container_slider: {
        flexDirection: 'row',
        top: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '70%',
        position: 'relative',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    corazon_resena: {
        color: 'rgb(151, 26, 64)',
        marginRight: 5,
    },
    texto_like: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'InriaSans',
    },
    texto_resena: {
        fontSize: 18,
        fontFamily: 'InriaSans',
        top: 80,
        marginHorizontal: 10,
        position: 'relative',
        height: 200,
    },
    fondo_numero_img: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        position: 'absolute',
        top: HEIGHT * 0.3 - 40,
        right: 20,
    },
    texto_numero_img: {
        fontSize: 15,
        fontFamily: 'InriaSans',
        fontWeight: 'bold',
    },
});

export default Negocio;