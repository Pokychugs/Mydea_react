import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, Pressable, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, runOnJS, withTiming, SlideInDown, SlideOutDown, FadeIn, FadeOut,} from "react-native-reanimated";
import { ScrollView, GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                <View style={styles.contenedorHorUb}>

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
        zIndex: 1,
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
});

export default Negocio;