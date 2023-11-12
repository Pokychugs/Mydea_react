import React, { useState } from 'react';
import menu from './Imagenes/Menu.png'
import lupa from './Imagenes/lupa.png'
import {Image, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

function Header() {

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 200);
    };

    return (
        <SafeAreaView style={styles.header_contenedor}>
            <View style={styles.logo_icono_contenedor}>
                <Image source={menu}  style={styles.logo_icono}></Image>
            </View>
            <View style={styles.buscar_contenedor}>
                <TextInput 
                style={styles.buscar}
                placeholder="Buscar... (Cafeterías, Tiendas)"
                placeholderTextColor="#000" >
                </TextInput>
                <TouchableOpacity 
                style={[styles.boton_buscar, {backgroundColor: isPressed ? '#da5d03' : '#c8a700'}]} 
                onPress={handlePress}
                activeOpacity={1}>
                    <Image source={lupa} style={styles.lupa_icono}></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    header_contenedor: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        marginRight: 25,
    },
    buscar_contenedor: {
        flex: 10,
    },
    buscar: {
        flex: 1,
        height: 40,
        borderColor: '#000', 
        borderWidth: 1,
        padding: 8,
        color: '#000',
        backgroundColor: '#fff', 
        borderRadius: 20,
    },
    boton_buscar: {
        height: 40,
        width: 40,
        zIndex: 2,
        position: 'absolute', 
        right: 0, 
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    lupa_icono:{
        height: 20,
        width: 20,
    },
    logo_icono_contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'Red',
        marginRight: 10,
    },
    logo_icono: {
        width: 25,
        height: 25,
    }
});

export default Header;