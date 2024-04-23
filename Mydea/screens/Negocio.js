import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS, withTiming, SlideInDown, SlideOutDown, FadeIn, FadeOut,} from "react-native-reanimated";
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imagen_perfil from './Imagenes/asa.jpg'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const data = [
    {
        id: '1',
        source: require('./Imagenes/neg1.jpg'),
    },
    {
        id: '2',
        source: require('./Imagenes/asa.jpg'),
    },
    {
        id: '3',
        source: require('./Imagenes/neg1.jpg'),
    },
];


function Negocio({navigation}) {

    //BACK

    //FRONT
    
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [isOpen, setOpen] = useState(false);
    const offset = useSharedValue(0);

    const toggleSheet = () => {
        setOpen(!isOpen);
        offset.value = 0;
    };

    const pan = Gesture.Pan()
    .onChange((event) => {
        const offsetDelta = event.changeY + offset.value;

        const clamp = Math.max(-20, offsetDelta);
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
        if (offset.value < 220 / 3) {
            offset.value = withSpring(0);
        } else {
            offset.value = withTiming(220, {}, () => {
            runOnJS(toggleSheet)();
            });
        }
    });

    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    


    if (!fontsLoaded) {
        return undefined;
    }


    const renderItem  = ({item}) => (
        <Image
            source={item.source}
            style={styles.image}
        />
    );

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    return(
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                />
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoNombre}>Nombre del negocio</Text>
                    <View style={styles.contenedorLikes}> 
                        <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                        <Text style={[styles.textoDescripcion, {marginLeft: 10}]}>00</Text>
                    </View>
                    <Text style={styles.textoDescripcion}>Descrición del negocio</Text>
                    
                </View>
                <TouchableOpacity style={[styles.contenedorInfo, {flexDirection: 'row'}]} onPress={toggleSheet}>
                    <Text style={styles.textoSub}>Horarios</Text> 
                    <IonIcons style={styles.iconoFlecha} name='arrow-forward' size={25}></IonIcons>
                </TouchableOpacity>
                <View style={styles.contenedorInfo}>
                    <Text style={styles.textoSub}>Ubicación</Text>
                    <Text style={styles.textoDescripcion}>Dirección del negocio</Text>
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
                        <Image source={imagen_perfil} style={styles.imagen_perfil}></Image>
                        <Text style={[styles.nombre_propietario, {marginTop: 70}]}>Nombre</Text>
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
            </ScrollView>
            {isOpen && (
                <>
                <AnimatedPressable
                style={styles.backdrop}
                entering={FadeIn}
                exiting={FadeOut}
                onPress={toggleSheet}
                />
                <GestureDetector gesture={pan}>
                    <Animated.View style={[styles.sheet, translateY]} 
                    entering={SlideInDown.springify().damping(15)}
                    exiting={SlideOutDown}>
                        <View>
                            <Text style={styles.textoSub}>Horarios</Text>
                        </View>
                        <View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Lunes</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Martes</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Miércoles</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Jueves</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Viernes</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Sábado</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                            <View style={styles.contenedorHorario}>
                                <Text style={styles.textoDescripcion}>Domingo</Text><Text style={[styles.textoDescripcion, styles.textoHora]}>9:00AM - 5:00PM</Text>
                            </View>
                        </View>
                    </Animated.View>
                </GestureDetector>
                </>
            )}
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container_slider: {
        flexDirection: 'row',
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
        width: "100%",
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
        borderRadius: 10,
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
        width: '48%',
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
});

export default Negocio;