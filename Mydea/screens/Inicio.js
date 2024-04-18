import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Imagen_negocio from './Imagenes/neg1.jpg'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Negocio from './Negocio';

function Inicio({navigation}) {

    //BACK

    //FRONT
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <GestureHandlerRootView>
            <ScrollView>
                <View style={styles.contendor_explorar}>
                    <Text style={styles.title}>Explorar</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.boton, {flexDirection: 'row'}]}>
                            <MaterialCommunityIcons name='store' size={35}></MaterialCommunityIcons>
                            <Text style={[styles.texto_boton]}>Negocios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, {flexDirection: 'row'}]}>
                            <FontAwesome name='shopping-basket' size={30}></FontAwesome>
                            <Text style={[styles.texto_boton]}>Productos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 30,}}>
                        <TouchableOpacity style={[styles.boton, {flexDirection: 'row'}]}>
                            <FontAwesome name='percent' size={30}></FontAwesome>
                            <Text style={[styles.texto_boton]}>Ofertas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton, {flexDirection: 'row'}]}>
                            <IonIcons name='people' size={30}></IonIcons>
                            <Text style={[styles.texto_boton]}>Nosotros</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>Los mejores negocios</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.contenedor_negocio} onPress={() => navigation.navigate('Negocio')}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio} onPress={() => navigation.navigate('Negocio')}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View>
                    <Text style={styles.subtitle}>De todo un poco</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Producto</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.contenedor_precio}>
                                    <Text style={[styles.texto_negocio, {marginHorizontal: 10}]}>$000.00</Text>
                                </View>
                                <IonIcons style={[styles.icon_heart, {marginLeft: 10}]} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <Text style={[styles.texto_negocio, {width: 200, fontSize:15}]}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Producto</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.contenedor_precio}>
                                    <Text style={[styles.texto_negocio, {marginHorizontal: 10}]}>$000.00</Text>
                                </View>
                                <IonIcons style={[styles.icon_heart, {marginLeft: 10}]} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <Text style={[styles.texto_negocio, {width: 200, fontSize:15}]}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Producto</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.contenedor_precio}>
                                    <Text style={[styles.texto_negocio, {marginHorizontal: 10}]}>$000.00</Text>
                                </View>
                                <IonIcons style={[styles.icon_heart, {marginLeft: 10}]} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <Text style={[styles.texto_negocio, {width: 200, fontSize:15}]}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Producto</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.contenedor_precio}>
                                    <Text style={[styles.texto_negocio, {marginHorizontal: 10}]}>$000.00</Text>
                                </View>
                                <IonIcons style={[styles.icon_heart, {marginLeft: 10}]} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <Text style={[styles.texto_negocio, {width: 200, fontSize:15}]}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </ScrollView>
                <View>
                    <Text style={styles.subtitle}>Los mejores negocios</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor_negocio}>
                        <View>
                            <Image style={styles.Imagen_negocio} source={Imagen_negocio}></Image>
                        </View>
                        <View>
                            <Text style={[styles.texto_negocio, {fontWeight: 'bold'}]}>Nombre del negocio</Text>
                            <View style={{flexDirection: 'row'}}>
                                <IonIcons style={styles.icon_heart} name='heart' size={25}></IonIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                                <MaterialCommunityIcons style={[styles.icon_heart, {marginLeft: 10}]} name='comment-processing' size={25}></MaterialCommunityIcons>
                                <Text style={styles.texto_negocio}>00.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <FontAwesome style={[styles.icon_heart, {marginLeft: 5, flex: 1}]} name='map-marker' size={30}></FontAwesome>
                                <Text style={[styles.texto_negocio, {width: 170, fontSize:15}]}>Manzana 013, Delegación San Gregorio Atlapulco, 1600, Méx.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
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
        color: '#fff',
    },
    subtitle: {
        fontFamily: 'InriaSans',
        fontSize: 30,
        margin: 10,
        color: '#000',
    },
    boton: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 60,
        margin: 6,
        borderRadius: 10,
        flex: 1,
        backgroundColor: '#fff',
        elevation: 4,
    },
    texto_boton: {
        fontFamily: 'InriaSans',
        fontSize: 25,
        marginHorizontal: 5,
        color: '#000',
        margin: 10,
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
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    Nombre_negocio: {
        fontFamily: 'InriaSans',
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',  
        marginLeft: 20,
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
    contenedor_negocio: {
        marginLeft: 20,
    },
    texto_negocio: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
        marginTop: 2,
        color: '#000',
    },
    contenedor_precio: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 3,
        borderRadius: 10,
    },
    contendor_explorar: {
        backgroundColor: '#fb7356',
    },
});

export default Inicio;