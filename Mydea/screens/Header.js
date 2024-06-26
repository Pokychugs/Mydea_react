import React, { useState } from 'react';
import axios from 'axios';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Lupa from './Imagenes/lupa.svg';

function Header({ navigation }) {
    const [isPressed, setIsPressed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePress = async () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 200);

        try {
            const response = await axios.post('http://192.168.1.82:3000/buscador', { termino: searchTerm });
            const negocios = response.data;
            navigation.navigate('Busqueda', { negocios, searchTerm});
        } catch (error) {
            console.error('Error al buscar negocios:', error);
        }
    };

    return (
        <View style={styles.header_contenedor}>
            <View style={styles.buscar_contenedor}>
                <TextInput 
                    style={styles.buscar}
                    placeholder="Buscar ... (Cafeterías, Abarrotes, Snacks)"
                    placeholderTextColor="#000"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <TouchableOpacity 
                    style={[styles.boton_buscar, {backgroundColor: isPressed ? '#da5d03' : '#c8a700'}]} 
                    onPress={handlePress}
                    activeOpacity={1}
                >
                    <Lupa width={20} height={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    header_contenedor: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 43,
        marginBottom: 10, 
        borderColor: '#000',
        borderStyle:'solid',
    },
    buscar_contenedor: {
        flex: 1,
        marginHorizontal: 10,
    },
    buscar: {
        flex: 1,
        height: 40,
        borderColor: '#000', 
        borderWidth: 1,
        paddingHorizontal: 20,
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
});

export default Header;