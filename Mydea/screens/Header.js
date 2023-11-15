import React, { useState } from 'react';
import Menu from './Imagenes/Menu.svg'
import Lupa from './Imagenes/lupa.svg'
import { TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';


function Header({ navigation }) {

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 200);
    };


    return (
            <SafeAreaView style={styles.header_contenedor}>
                <TouchableOpacity style={styles.logo_icono_contenedor}>
                    <Menu width={25} height={25}></Menu>
                </TouchableOpacity>
                <View style={styles.buscar_contenedor}>
                    <TextInput 
                    style={styles.buscar}
                    placeholder="Buscar ... (Cafeterías, Abarrotes, Snacks)"
                    placeholderTextColor="#000" >
                    </TextInput>
                    <TouchableOpacity 
                    style={[styles.boton_buscar, {backgroundColor: isPressed ? '#da5d03' : '#c8a700'}]} 
                    onPress={handlePress}
                    activeOpacity={1}>
                        <Lupa width={20} height={20}></Lupa>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    
    header_contenedor: {
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
    logo_icono_contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'Red',
        marginRight: 10,
    },
});

export default Header;