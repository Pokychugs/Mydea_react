import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';
import Imagen from './Imagenes/image-solid.svg';

const data_2 = [
    { label: 'Disponible en todo momento', value: '1' },
    { label: 'Por pedido', value: '2' },
    { label: 'Mayoreo', value: '3' },
    { label: 'Solo por unidad', value: '4' },
    { label: 'Disponible por un tiempo', value: '5' },
    { label: 'Proximamente', value: '6' },
];


function Añadir_producto({navigation}) {
    const [fontsLoaded] = useFonts({
        'InriaSans': require('./fonts/Inria_sans/InriaSans-Regular.ttf'),
    });

    const [image_5, setImage_5] = useState(null);

    const [value_3, setValue_3] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    if (!fontsLoaded) {
        return undefined;
    }

    const pickImage = async (containerId) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage_5(result.assets[0].uri);
        }
    }

    return(
            <View>
                <View style={styles.container_morado}></View>
                <ScrollView>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.contenedor_formulario}>
                            <Text style={styles.title_formulario}>Crear y Añadir un Producto o Servicio</Text>
                            <View style={styles.subcontenedor_formulario}>
                                <Text style={styles.subtitulo_formulario}>Imagen del producto o servicio</Text>
                                <TouchableOpacity style={styles.boton_logo} onPress={() => pickImage('container5')}>
                                    <Imagen width={50} height={50} style={styles.imagen_icono}></Imagen>
                                    {image_5 && <Image source={{ uri: image_5 }} style={styles.Imagen_logo} />}
                                </TouchableOpacity>
                                <Text style={styles.subtitulo_formulario}>Nombre del producto o servicio</Text>
                                <TextInput
                                style={styles.text_input}
                                ></TextInput>
                                <Text style={styles.subtitulo_formulario}>Precio del producto o servicio</Text>
                                <TextInput
                                style={styles.text_input}
                                ></TextInput>
                                <Text style={styles.subtitulo_formulario}>Descripción del producto o servicio</Text>
                                <TextInput style={styles.textArea_input} 
                                multiline
                                numberOfLines={4}
                                ></TextInput>
                                <Text style={styles.subtitulo_formulario}>Disponibilidad del Producto o Servicio </Text>
                                <Dropdown
                                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    data={data_2}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Seleccione la Disponibilidad del Producto o Servicio ' : '...'}
                                    value={value_3}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setValue_3(item.value);
                                        setIsFocus(false);
                                    }}>
                                </Dropdown>
                            </View>
                        </View>
                        <View style={styles.contenedor_botones}>
                            <TouchableOpacity style={styles.boton_agregar_lista} onPress={() => navigation.navigate('Crear_negocio_formulario')}>
                                <Text style={styles.texto_boton}>Regresar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.boton_agregar_lista, styles.boton_publicar]}>
                                <Text style={[styles.texto_boton, styles.texto_publicar]}>Publicar</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container_morado: {
        backgroundColor: '#5B1D63',
        width: '100%',
        height: 150,
        position: 'absolute',
    },
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 10,
    },
    contenedor_formulario: {
        backgroundColor: '#f8f8f8',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 3,
        borderRadius: 7,
        width: '90%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title_formulario: {
        fontFamily: 'InriaSans',
        fontSize: 30,
        margin: 10,
        fontWeight: 'bold',
    },
    subcontenedor_formulario: {
        alignItems: 'center', 
        width: '90%',
    },
    subtitulo_formulario: {
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    text_input: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 50,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
    textArea_input: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '100%',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#E5E5E5',
        padding: 10,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: '#E5E5E5',
        marginBottom: 10,
        width: '100%', 
    },
    placeholderStyle: {
        fontSize: 16,
        margin: 6,
    },
    selectedTextStyle: {
        fontSize: 16,
        margin: 6,
    },
    boton_logo: {
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        width: '50%',
        marginBottom: 10,
        height: 150,
        backgroundColor: '#E5E5E5',
        elevation: 4,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    Imagen_logo: {
        width: '100%',
        height: 148,
        borderRadius: 7,
    },
    imagen_icono: {
        fill: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: 10, 
    },
    contenedor_botones: {
        width: '90%',
        flexDirection: 'row',
    },
    boton_agregar_lista: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        height: 50,
        marginTop: 6,
        marginBottom: 10,
        elevation: 4,
        marginHorizontal: 5,
    },
    texto_boton: {
        color: '#5B1D63',
        fontFamily: 'InriaSans',
        fontSize: 20,
        marginHorizontal: 5,
    },
    boton_publicar: {
        backgroundColor: '#5B1D63',
        borderColor: '#5B1D63',
    },
    texto_publicar: {
        color: '#fff'
    },
})

export default Añadir_producto;