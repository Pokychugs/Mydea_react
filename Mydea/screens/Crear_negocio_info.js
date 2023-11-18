import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts} from '@expo-google-fonts/inter'
import Tienda from './Imagenes/store-solid.svg';
import Bolsa from './Imagenes/bag-shopping-solid.svg';
import BolsaDinero from './Imagenes/sack-dollar-solid.svg';
import HandShake from './Imagenes/handshake-solid.svg';


function Crear_negocio_info({navigation}) {

    const [fontsLoaded] = useFonts({
        'JosefinSans': require('./fonts/Josefin_Sans/static/JosefinSans-Bold.ttf'),
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
        return undefined;
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.contenedor_texto}>
                    <Text style={styles.title}>UNETE A MYDEA Y EMPIEZA A HACER CRECER TU NEGOCIO</Text>
                    <Text style={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minus quibusdam! Ipsa repellendus, cupiditate nulla nisi at consequuntur porro sequi maiores molestiae magni. Voluptates error, eius quia vitae repellat amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, obcaecati? Facilis nam placeat ipsam, tenetur, qui libero voluptatum excepturi, aut dolore quae alias temporibus sit sint id dolorem et quis.
                    </Text>
                    <View style={styles.contenedor_botones}>
                        <TouchableOpacity style={styles.boton_cancelar}
                        onPress={() => navigation.goBack()}>
                            <Text style={styles.texto_cancelar}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.boton_continuar} onPress={() => navigation.navigate('Crear_negocio_formulario')}>
                            <Text style={styles.texto_continuar}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contenedor_porque}>
                    <Text style={styles.texto_porque}>¿Por qué unirte a MYDEA?</Text>
                    <View style={styles.contenedor_icono}>
                        <Tienda width={50} height={50} style={styles.icono}></Tienda>
                        <Text style={styles.texto_icono}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto esse voluptas ad alias labore minima! Beatae.</Text>
                    </View>
                    <View style={styles.contenedor_icono}>
                        <Bolsa width={50} height={50} style={styles.icono}></Bolsa>
                        <Text style={styles.texto_icono}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto esse voluptas ad alias labore minima! Beatae.</Text>
                    </View>
                    <View style={styles.contenedor_icono}>
                        <BolsaDinero width={50} height={50} style={styles.icono}></BolsaDinero>
                        <Text style={styles.texto_icono}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto esse voluptas ad alias labore minima! Beatae.</Text>
                    </View>
                    <View style={styles.contenedor_icono}>
                        <HandShake width={50} height={50} style={styles.icono}></HandShake>
                        <Text style={styles.texto_icono}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto esse voluptas ad alias labore minima! Beatae.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    contenedor_texto: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title: {
        margin: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'JosefinSans'
    },
    parrafo: {
        fontFamily: 'InriaSans',
        margin: 10,
        fontSize: 15,
    },
    contenedor_botones:{
        flexDirection: 'row',
    },
    boton_cancelar:{
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
        height: 40,
    },
    boton_continuar: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        backgroundColor: '#F43770',
        borderColor: '#F43770',
        borderStyle:'solid',
        borderWidth: 2,
        borderTopLeftRadius: 5,
        margin: 10, 
    },
    texto_cancelar: {
        fontSize: 20,
        fontFamily: 'InriaSans',
    },
    texto_continuar: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'InriaSans',
    },
    contenedor_porque:{
        backgroundColor: '#FB7356',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    texto_porque: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'InriaSans',
        margin: 10,
    },
    contenedor_icono: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
    },
    icono: {
        flex: 1,
        fill: '#fff',
        marginRight: 9,
    },
    texto_icono: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'InriaSans',
    },
});

export default Crear_negocio_info;
