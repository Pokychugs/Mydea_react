import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';

function Crear_negocio_info({navigation}) {

    const [fontsLoaded] = useFonts({
        'Josefin Sans': require('./fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf'),
        'Inria-Sans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 200);

        console.log(fontsLoaded);
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.contenedor_texto}>
                    <Text style={styles.title}>UNETE A MYDEA Y EMPIEZA A HACER CRECER TU NEGOCIO</Text>
                    <Text style={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minus quibusdam! Ipsa repellendus, cupiditate nulla nisi at consequuntur porro sequi maiores molestiae magni. Voluptates error, eius quia vitae repellat amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, obcaecati? Facilis nam placeat ipsam, tenetur, qui libero voluptatum excepturi, aut dolore quae alias temporibus sit sint id dolorem et quis.
                    </Text>
                    <View style={styles.contenedor_botones}>
                        <TouchableOpacity style={[styles.boton_cancelar, {backgroundColor: isPressed ? '#000' : '#fff'}]}
                        onPress={handlePress}
                        activeOpacity={1}>
                            <Text style={[styles.texto_cancelar, {color: isPressed ? '#fff' : '#000'}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.boton_continuar}>
                            <Text style={styles.texto_continuar}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contenedor_porque}>
                    <Text style={styles.texto_porque}>¿Por qué unirte a MYDEA?</Text>
                </View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
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
    },
    parrafo: {
        fontFamily: 'Inria-Sans',
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
        borderRadius: 5,
        margin: 10, 
    },
    texto_cancelar: {
        fontSize: 20,
    },
    texto_continuar: {
        fontSize: 20,
        color: '#fff',
    },
    contenedor_porque:{
        backgroundColor: '#FB7356',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    texto_porque: {
        color: '#fff',
        fontSize: 25,
    }
});

export default Crear_negocio_info;