import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Gesture, GestureDetector, GestureHandlerRootView,} from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS, withTiming, SlideInDown, SlideOutDown, FadeIn, FadeOut,} from "react-native-reanimated";
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Imagen_negocio from './Imagenes/neg1.jpg'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Mis_negocio({navigation}) {

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

    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView></SafeAreaView>
                <IonIcons style={styles.icon_log_out} name='arrow-back' size={35} onPress={() => navigation.goBack()}></IonIcons>
                <Text style={styles.title}>Mis Negocios</Text>
                <ScrollView>
                    <View style={[styles.container, styles.contenedor_reseña]}>
                        <TouchableOpacity style={styles.icon_dots}
                        onPress={toggleSheet}>
                            <MaterialCommunityIcons name='dots-horizontal' size={30}></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', marginTop: 10,}}>
                            <View style={{flex:1,alignItems: 'center',justifyContent: 'center', marginLeft: 5}}>
                                <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                            </View>
                            <View style={{flex: 3, marginLeft: 10}}>
                                <Text style={styles.Nombre_negocio}>Nombre del Negocio</Text>
                            </View>
                        </View>
                        <Text style={styles.texto_reseña}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis! Voluptates ea corrupti, nisi odio ullam voluptatibus delectus, praesentium accusamus laboriosam quas quae commodi illo cum neque qui molestiae maiores!</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
                        <TouchableOpacity style={[styles.container, {borderColor: 'rgba(0, 0, 0, 0.1)', borderStyle:'solid', borderBottomWidth: 1,}]}>
                            <Text style={styles.texto}>Editar Negocio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container, {borderColor: 'rgba(0, 0, 0, 0.1)', borderStyle:'solid', borderBottomWidth: 1,}]}>
                            <Text style={styles.texto}>Ver Productos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container, {borderColor: 'rgba(0, 0, 0, 0.1)', borderStyle:'solid', borderBottomWidth: 1,}]}>
                            <Text style={styles.texto}>Novedades y Promociones</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container, {borderColor: 'rgba(0, 0, 0, 0.1)', borderStyle:'solid', borderBottomWidth: 1,}]}>
                            <Text style={styles.texto}>FEEDBACK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container]}>
                            <Text style={[styles.texto, {color: 'red'}]}>Eliminar negocio</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </GestureDetector>
                </>
            )}
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontFamily: 'InriaSans',
        fontSize: 40,
        margin: 10,
        color: '#000',
        textAlign: 'justify',
    },
    boton: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 50,
        margin: 6,
        borderRadius: 10,
        width: '90%'
    },
    boton_crear:{
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        backgroundColor: '#000'
    },
    texto_boton: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
        color: '#fff'
    },
    icon_log_out: {
        left: 15,
        top: 35,
        position: 'absolute',
    },
    contenedor_reseña: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        marginHorizontal: 10,
    },
    Imagen_negocio: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    Nombre_negocio: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',  
        marginLeft: 20
    },
    texto: {
        fontFamily: 'InriaSans',
        fontSize: 20,
    },
    icon_heart: {
        marginRight: 5,
    },
    texto_reseña: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 15,
    },
    icon_dots: {
        right: 5,
        top: 4,
        position: 'absolute',
    },
    sheet: {
        backgroundColor: "white",
        padding: 16,
        height: 330,
        width: "100%",
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
    },
});

export default Mis_negocio;