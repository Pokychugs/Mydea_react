import { useFonts } from 'expo-font';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

function Inicio_sesión({navigation}) {

    //BACK
    const { login } = useContext(AuthContext);
    const [usuario, setUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');

    const { setUsuarioContext } = useContext(AuthContext);
    const { setGuardadosContext } = useContext(AuthContext);

    const handleInicioSesion = async () => {
        try {

            const userData = {
                usuario: usuario,
                correo: correo,
                contra: contra,
            };

            const userDataJson = JSON.stringify(userData);


            const response = await fetch("http://192.168.227.70:3000/iniciosesion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: userDataJson,
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const {usuario: usuarioData, guardados: guardadosData } = await response.json();
            setUsuarioContext(usuarioData);
            setGuardadosContext(guardadosData)
            console.log(usuarioData, guardadosData);
            Alert.alert('Inicio de sesión exitoso');
            navigation.navigate('Perfil');

        } catch (error) {
            Alert.alert('Error en el inicio de sesión: ' + error.message);
        }
    };


    //FRONT
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('./fonts/Poppins/Poppins-Regular.ttf'),
    });

    const [focusedInput, setFocusedInput] = useState(null);

    if (!fontsLoaded) {
        return undefined;
    }

    
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };
    
    const handleBlur = () => {
        setFocusedInput(null);
    };

    return (
        <View>
            <View style={styles.container_amarillo}></View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.contenedor_formulario}>
                        <Text style={styles.title}>INICIAR SESIÓN</Text>
                        <Text style={styles.texto}>Bienvenido de vuelta!! {'\n'} Por favor complete los campos solicitados para Iniciar Sesión.</Text>
                        <View style={styles.subcontenedor_formulario}>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Nombre de usuario</Text>                            
                                <TextInput style={[styles.textinput,  focusedInput === 'input1' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input1')}
                                onBlur={handleBlur}
                                onChangeText={text => setUsuario(text)}
                                placeholder='NOMBRE DE USUARIO' ></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Correo electrónico</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input2' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input2')}
                                onBlur={handleBlur}
                                onChangeText={text => setCorreo(text)}
                                placeholder='CORREO ELECTRÓNICO'></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Contraseña</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input3' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input3')}
                                onChangeText={text => setContra(text)}
                                placeholder='CONTRSEÑA'
                                secureTextEntry={true}></TextInput>
                            </View>
                            <Text style={styles.texto}>¿Aún no tienes una cuenta?</Text><Text style={[styles.texto, {color:'#ad3f26'}]}
                            onPress={() => navigation.navigate('Registro')}>REGISTRATE</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.boton} onPress={handleInicioSesion}>
                        <Text style={styles.texto_boton}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    container_amarillo: {
        backgroundColor: 'rgb(224, 177, 23)',
        width: '100%',
        height: 150,
        position: 'absolute',
    },
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 10,
        top: 50,
    },
    title: {
        fontFamily: 'poppins-regular',
        fontSize: 40,
        marginTop: 10,
        color: '#000',
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
        marginBottom: 20,
    },
    texto: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        marginBottom: 2,
        textAlign: 'center',
    },
    subcontenedor_formulario: {
        width: '90%',
        margin: 30,
    },
    textinput: {
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderColor: '#727272',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 320,
        height: 50,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    inputFocused: {
        borderColor: 'blue', 
        backgroundColor: '#fff',
    },
    boton: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#D95538',
        borderColor: '#000',
        borderStyle:'solid',
        borderWidth: 2,
        borderRadius: 7,
        height: 50,
        marginTop: 6,
        marginBottom: 50,
        elevation: 4,
    },
    texto_boton: {
        color: '#fff',
        fontFamily: 'poppins-regular',
        fontSize: 20,
        marginHorizontal: 5,
        fontWeight: 'bold',
    },
});

export default Inicio_sesión;