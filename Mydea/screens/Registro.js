import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import { NativeBaseProvider} from "native-base";
import { Checkbox } from "native-base";
import { useNavigation } from '@react-navigation/native';

const data = [
    { label: 'Cuenta Normal', value: '1' },
    { label: 'Cuenta Vendedor', value: '2' },
];

function Registro({navigation}) {   

    //BACK
    const [focusedInput, setFocusedInput] = useState(null);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contra, setContra] = useState('');
    const [confirmarcontra, setConfirmarContra] = useState('');
    const [nombre, setNombre] = useState('');

    const handleRegistro = async () => {

        // NOMBRE COMPLETO
        if (nombre.length > 50) {
            Alert.alert("Se permite un maximo de 50 caracteres");
            return false;
        }
    
        if (nombre.length < 10){
            Alert.alert("Termine de escribir su nombre")
            return false;
        }

        // USUARIO
        if (usuario.length === 0 || usuario.length > 20) {
            Alert.alert('El nombre de usuario debe tener entre 1 y 20 caracteres.');
            return;
        }

        // CORREO
        const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        if (!emailRegex.test(correo)) {
            Alert.alert('Por favor ingresa un correo electrónico válido.');
            return;
        }

        // NÚMERO DE TELÉFONO
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(telefono)) {
            Alert.alert('Por favor ingresa un número telefónico válido.');
            return;
        }

        // CONTRASEÑA Y CONFIRMAR
        if (contra.length < 8 || contra.length > 25) {
            Alert.alert('La contraseña debe tener entre 8 y 25 caracteres.');
            return;
        }

        if (confirmarcontra.length < 8 || confirmarcontra.length > 25) {
            Alert.alert('La contraseña debe tener entre 8 y 25 caracteres.');
            return;
        }

        if (contra != confirmarcontra) {
            Alert.alert("Las claves no coinciden");
            return false;
        }

        // TIPO DE CUENTA
        if (!value) {
            Alert.alert('Por favor selecciona un tipo de cuenta.');
            return;
        }

        const userData = {
            nombre : nombre,
            usuario: usuario,
            correo: correo,
            telefono: telefono,
            contra: contra,
            tipo: value,
        };
    
        const userDataJson = JSON.stringify(userData);
        
        let response;
        try {
            response = await fetch("http://192.168.0.223:3000/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: userDataJson,
            });
    
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
    
            const data = await response.json();
            Alert.alert('¡Registro exitoso!'); 
            navigation.navigate('Inicio_sesión');
            
        } catch (error) {
            Alert.alert('Error en el registro: ' + error.message);
            if (error.message.includes('400')) {
                const responseBody = await response.json(); 
                Alert.alert('Error en el registro', responseBody.error); 
            }
        }
    };
    
    //FRONT
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('./fonts/Poppins/Poppins-Regular.ttf'),
    });

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
        <NativeBaseProvider>
            <View style={styles.container_amarillo}></View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.contenedor_formulario}>
                        <Text style={styles.title}>Bienvenido</Text>
                        <Text style={styles.texto}>Ya esta a un paso más cerca de formar parte de la enorme comunidad de MYDEA.
    Por favor complete los campos solicitados para terminar su registro.</Text>
                        <View style={styles.subcontenedor_formulario} testID='CrearUsuario'>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Nombre Completo</Text>                            
                                <TextInput style={[styles.textinput,  focusedInput === 'input7' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input7')}
                                onBlur={handleBlur}
                                onChangeText={text => setNombre(text)}
                                value={nombre}
                                placeholder='NOMBRE COMPLETO' ></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Nombre de usuario</Text>                            
                                <TextInput style={[styles.textinput,  focusedInput === 'input1' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input1')}
                                onBlur={handleBlur}
                                onChangeText={text => setUsuario(text)}
                                value={usuario}
                                placeholder='NOMBRE DE USUARIO' ></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Correo electrónico</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input2' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input2')}
                                onBlur={handleBlur}
                                onChangeText={text => setCorreo(text)}
                                value={correo}
                                placeholder='CORREO ELECTRÓNICO'></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Número Telefónico</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input3' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input3')}
                                onBlur={handleBlur}
                                onChangeText={text => setTelefono(text)}
                                value={telefono}
                                placeholder='NÚMERO TELEFÓNICO'></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Contraseña</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input5' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input5')}
                                onChangeText={text => setContra(text)}
                                value={contra}
                                placeholder='CONTRASEÑA'
                                secureTextEntry={true}></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Confirmar Contraseña</Text>
                                <TextInput style={[styles.textinput, focusedInput === 'input6' ? styles.inputFocused : null]}
                                onFocus={() => handleFocus('input6')}
                                onChangeText={text => setConfirmarContra(text)}
                                value={confirmarcontra}
                                placeholder='CONFIRMAR'
                                secureTextEntry={true}></TextInput>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Seleccione su tipo de negocio' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                }}>
                                </Dropdown>
                            </View>
                            <View style={{marginBottom: 20, alignItems: 'center', justifyContent: 'center',}}>
                                <View style={{flexDirection: 'row', marginVertical: 5}}>
                                    <Checkbox
                                    colorScheme="danger" 
                                    size="md"
                                    aria-label="Aceptar Términos y Condiciones"
                                    style={{flex: 1}}>
                                    </Checkbox>
                                    <Text 
                                    style={[styles.texto, {borderColor: '#D95538', 
                                    borderStyle:'solid', 
                                    borderBottomWidth: 2, 
                                    flex: 1, 
                                    fontSize: 17, 
                                    marginHorizontal: 5}]}
                                    onPress={() => navigation.navigate('Terminos_condiciones')}>
                                    Aceptar Términos y Condiciones
                                    </Text>
                                </View>
                                <View style={{flexDirection: 'row', marginVertical: 5}}>
                                    <Checkbox
                                    colorScheme="danger" 
                                    size="md"
                                    aria-label="Aceptar Aviso de Privacidad"
                                    style={{flex: 1}}>
                                    </Checkbox>
                                    <Text 
                                    style={[styles.texto, {borderColor: '#D95538', borderStyle:'solid', borderBottomWidth: 2, flex: 1, fontSize: 17, marginHorizontal: 5}]}
                                    onPress={() => navigation.navigate('Aviso_privacidad')}>Aceptar Aviso de Privacidad</Text>
                                </View>
                            </View>
                            <Text style={styles.texto}>¿Ya tienes una cuenta?</Text><Text style={[styles.texto, {color:'rgb(224, 177, 23)'}]}
                            onPress={() => navigation.navigate('Inicio_sesión')}>INICIA SESIÓN</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
                        <Text style={styles.texto_boton}>REGISTRARSE</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </NativeBaseProvider>
        
    );
}

const styles = StyleSheet.create({
    container_amarillo: {
        backgroundColor: '#D95538',
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
        backgroundColor: 'rgba(255, 196, 0, 1)',
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
        color: '#000',
        fontFamily: 'poppins-regular',
        fontSize: 20,
        marginHorizontal: 5,
        fontWeight: 'bold',
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
});

export default Registro;