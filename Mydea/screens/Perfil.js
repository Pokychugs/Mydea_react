import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Gesture, GestureDetector, GestureHandlerRootView,} from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS, withTiming, SlideInDown, SlideOutDown, FadeIn, FadeOut,} from "react-native-reanimated";
import Imagen_perfil from './Imagenes/perfil_icono.png';
import Imagen_negocio from './Imagenes/neg1.jpg'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FirstRoute = () => (
    <ScrollView>
        <View style={[styles.container, styles.contenedor_reseña]}>
            <TouchableOpacity style={styles.icon_dots}>
                <MaterialCommunityIcons name='dots-horizontal' size={30}></MaterialCommunityIcons>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10,}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center', marginLeft: 5}}>
                    <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                </View>
                <View style={{flex: 3, marginLeft: 10}}>
                    <Text style={styles.Nombre_negocio}>Nombre del Negocio</Text>
                    <View style={{flexDirection: 'row'}}>
                        <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                        <Text style={styles.texto}>Te gustó</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.texto_reseña}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis! Voluptates ea corrupti, nisi odio ullam voluptatibus delectus, praesentium accusamus laboriosam quas quae commodi illo cum neque qui molestiae maiores!</Text>
            <View>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <View style={[styles.container, styles.contenedor_reseña]}>
            <TouchableOpacity style={styles.icon_dots}>
                <MaterialCommunityIcons name='dots-horizontal' size={30}></MaterialCommunityIcons>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10,}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center', marginLeft: 5}}>
                    <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                </View>
                <View style={{flex: 3, marginLeft: 10}}>
                    <Text style={styles.Nombre_negocio}>Nombre del Negocio</Text>
                    <View style={{flexDirection: 'row'}}>
                        <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                        <Text style={styles.texto}>Te gustó</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.texto_reseña}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis! Voluptates ea corrupti, nisi odio ullam voluptatibus delectus, praesentium accusamus laboriosam quas quae commodi illo cum neque qui molestiae maiores!</Text>
            <View>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.container, styles.contenedor_reseña]}>
            <TouchableOpacity style={styles.icon_dots}>
                <MaterialCommunityIcons name='dots-horizontal' size={30}></MaterialCommunityIcons>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10,}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center', marginLeft: 5, marginTop: 10}}>
                    <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                </View>
                <View style={{flex: 3, marginLeft: 10}}>
                    <Text style={styles.Nombre_negocio}>Nombre del Producto</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.texto}>$00.00</Text>
                        <Text style={styles.texto}>Disponibilidad:</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.texto_reseña}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis! Voluptates ea corrupti, nisi odio ullam voluptatibus delectus, praesentium accusamus laboriosam quas quae commodi illo cum neque qui molestiae maiores!</Text>
            <View>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Perfil({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [sin_sesion, setSin_sesion] = useState(true);
    const [sesion_usuario, setSesion_usuario] = useState(false);
    const [sesion_vendedor, setSesion_vendedor] = useState(false);

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'Comentarios' },
        { key: 'second', title: 'Guardados' },
    ]);

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

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: '#000',
            }}
            style={{
                backgroundColor: '#f2f2f2',
                height: 44,
                marginTop: 20,
            }}
            renderLabel={({ focused, route }) => (
                <Text style={[{ fontFamily: 'InriaSans', fontSize: 20,color: focused ? 'black' : 'gray' }]}>
                {route.title}
                </Text>
            )}
            />
    );

    const handleSesionUsuario = () => {
        setSesion_usuario(true);
        setSin_sesion(false);
        setSesion_vendedor(false);
    };
    const handleSesionVendedor = () => {
        setSesion_usuario(false);
        setSin_sesion(false);
        setSesion_vendedor(true);
    };

    const handleCerrarSesion = () => {
        setSesion_usuario(false);
        setSin_sesion(true);
        setSesion_vendedor(false);
        toggleSheet();
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                {sin_sesion && (
                    <View>
                        <Text style={styles.title}>Inicia sesión para obtener la mejor experiencia</Text>
                        <TouchableOpacity style={[styles.boton, {backgroundColor:'rgba(244, 55, 112, 1)'}]} onPress={() => navigation.navigate('Inicio_sesión')}>
                            <Text style={[styles.texto_boton, {color: '#fff'}]}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} onPress={() => navigation.navigate('Registro')}>
                            <Text style={[styles.texto_boton]}>Crear Cuenta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} onPress={handleSesionUsuario}>
                            <Text style={[styles.texto_boton]}>Mostrar Perfil Usuario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, styles.boton_crear]} onPress={handleSesionVendedor}>
                            <Text style={[styles.texto_boton]}>Mostrar Perfil Vendedor</Text>
                        </TouchableOpacity>
                        <Text style={{flex: 1, width: 350}}>Los botones de mostrar perfil estan de a mientras, después se quitan, la idea es que una vez inicie sesión le muestre su perfil, ya sea como usuario o como vendedor</Text>
                    </View>
                )}
                    {sesion_usuario && (
                        <View>
                            <View style={[styles.container]}>
                                <TouchableOpacity style={styles.icon_log_out} 
                                onPress={toggleSheet}>
                                    <IonIcons name='settings-sharp' size={35}></IonIcons>
                                </TouchableOpacity>
                                <Image style={styles.Imagen_perfil} source={Imagen_perfil}></Image>
                                <Text style={styles.Nombre_usuario}>Nombre de usuario</Text>
                                <Text style={styles.Nombre_real}>Nombre real</Text>
                                <View style={styles.contenedor_contacto}>
                                    <Text style={styles.Contacto} onPress={() => navigation.navigate('Datos_Contacto')}>Datos de contacto<IonIcons style={styles.icon_log_out} name='arrow-forward' size={22}></IonIcons></Text>
                                </View>
                            </View>
                            <View style={{flexGrow: 1, flex: 1,}}>
                                <TabView
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                initialLayout={{ width: layout.width, flex: 1}}
                                renderTabBar={renderTabBar}
                                />
                            </View>
                        </View>
                    )}
                    {sesion_vendedor && (
                        <View>
                            <View style={[styles.container]}>
                                <TouchableOpacity style={styles.icon_log_out} 
                                onPress={toggleSheet}>
                                    <IonIcons name='settings-sharp' size={35}></IonIcons>
                                </TouchableOpacity>
                                <Image style={styles.Imagen_perfil} source={Imagen_perfil}></Image>
                                <Text style={styles.Nombre_usuario}>Nombre de usuario</Text>
                                <Text style={styles.Nombre_real}>Nombre real</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Datos_Contacto')} style={[styles.contenedor_contacto, { flexDirection: 'row', alignItems: 'center', width: '90%' }]}>
                                    <Text style={styles.Contacto}>
                                        Datos de contacto
                                    </Text>
                                    <IonIcons name='arrow-forward' size={22} style={{ marginLeft: 'auto' }}></IonIcons>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Mis_negocio')} style={[styles.contenedor_contacto, { flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: 10 }]}>
                                    <Text style={styles.Contacto}>
                                        Mis negocios
                                    </Text>
                                    <IonIcons name='arrow-forward' size={22} style={{ marginLeft: 'auto' }}></IonIcons>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexGrow: 1, flex: 1,}}>
                                <TabView
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                initialLayout={{ width: layout.width, flex: 1}}
                                renderTabBar={renderTabBar}
                                />
                            </View>
                        </View>
                    )}
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
                                <Text style={styles.texto}>Editar Perfil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.container]} onPress={handleCerrarSesion}>
                                <Text style={[styles.texto, {color: 'red'}]}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </GestureDetector>
                    </>
                )}
            </SafeAreaView>
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
    },
    boton_crear:{
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
    },
    texto_boton: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
    },
    Imagen_perfil: {
        width: 150,
        height: 150,
        marginTop: 50,
        borderRadius: 100,
    },
    Nombre_usuario: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',  
    },
    Nombre_real: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 25,
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
        right: 1,
        top: 20,
        position: 'absolute',
    },
    boton_editar:{
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
    texto_boton_editar: {
        fontFamily: 'InriaSans',
        fontSize: 23,
        marginHorizontal: 5,
        color: '#fff',
    },
    contenedor_reseña: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        marginHorizontal: 2,
    },
    Imagen_negocio: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    Nombre_negocio: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',  
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
        height: 150,
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

export default Perfil;