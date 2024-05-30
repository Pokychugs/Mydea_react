import { useFonts } from 'expo-font';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import { NativeBaseProvider} from "native-base";
import { Checkbox, Alert, VStack, HStack, IconButton, CloseIcon } from "native-base";
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import moment from 'moment';


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
    const [fecha, setFecha] = useState('');

    const [errorNombre, setErrorNombre] = useState(false);
    const [errorNombre_2, setErrorNombre_2] = useState(false);
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorUsuario, setErrorUsuario] = useState(false);
    const [errorTelefono, setErrorTelefono] = useState(false);
    const [errorContra, setErrorContra] = useState(false);
    const [errorConfirmar, setErrorConfirmar] = useState(false);
    const [errorTipo, setErrorTipo] = useState(false);
    const [aceptarTerminos, setAceptarTerminos] = useState(true);
    const [aceptarPrivacidad, setAceptarPrivacidad] = useState(true);

    const [showAlert, setShowAlert] = useState(false);
    const [textoAlerta, setTextoAlerta] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');
    const translateY = useRef(new Animated.Value(-1000)).current;

    const hideAlert = () => {
        Animated.timing(translateY, {
          toValue: -1000,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setShowAlert(false);
        });
    };
    
    const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
    );

    useEffect(() => {

        //FECHA AÑO/MES/DIA.
        const fechaActual = moment().format('YYYY-MM-DD');
        setFecha(fechaActual);

        // NOMBRE COMPLETO
        if (nombre.length > 50) {
            setErrorNombre_2(true);
        }else{
            setErrorNombre_2(false);
        }
    
        if (nombre.length < 10){
            setErrorNombre(true);
        }else{
            setErrorNombre(false);
        }

        // USUARIO
        if (usuario.length === 0 || usuario.length > 20) {
            setErrorUsuario(true);
        }else{
            setErrorUsuario(false);
        }

        // CORREO
        const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        if (!emailRegex.test(correo)) {
            setErrorCorreo(true);
        }else{
            setErrorCorreo(false);
        }

        // NÚMERO DE TELÉFONO
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(telefono)) {
            setErrorTelefono(true);
        }else{
            setErrorTelefono(false);
        }

        // CONTRASEÑA Y CONFIRMAR
        if (contra.length < 8 || contra.length > 25) {
            setErrorContra(true);
        }else{
            setErrorContra(false);
        }

        if (contra != confirmarcontra) {
            setErrorConfirmar(true);
        }else{
            setErrorConfirmar(false);
        }

        // TIPO DE CUENTA
        if (!value) {
            setErrorTipo(true);
        }else{
            setErrorTipo(false);
        }

    }, [nombre, correo, usuario, telefono, contra, confirmarcontra, value]);

    const handleRegistro = async () => {

        if(errorNombre || errorNombre_2 || errorCorreo || errorUsuario || errorTelefono || errorContra || errorConfirmar || errorTipo || aceptarPrivacidad || aceptarTerminos){
            console.log('hay errores');
            //console.log('Errores:', { errorNombre, errorNombre_2, errorCorreo, errorUsuario, errorTelefono, errorContra, errorConfirmar, errorTipo });
            return false;
        }else{
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
                console.log('hola');
                response = await fetch("http://192.168.249.70:3000/registro", {
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
                setShowAlert(true);
                setTextoAlerta('Registro exitoso');
                setTipoAlerta("success");
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
                setTimeout(() => {
                    hideAlert();
                    navigation.navigate('Inicio_sesión');
                }, 2000);
                
            } catch (error) {
                setShowAlert(true);
                setTextoAlerta('Error en el registro: ' + error.message);
                setTipoAlerta("error");
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
                setTimeout(() => {
                    hideAlert();
                }, 3000);
                if (error.message.includes('400')) {
                    const responseBody = await response.json(); 
                    setShowAlert(true);
                    setTextoAlerta('Error en el registro', responseBody.error);
                    setTipoAlerta("error");
                    Animated.timing(translateY, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }).start();
                    setTimeout(() => {
                        hideAlert();
                    }, 3000);
                }
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
            <GestureHandlerRootView>
                <ScrollView>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.contenedor_formulario}>
                            <Text style={styles.title}>Bienvenido</Text>
                            <Text style={styles.texto}>Ya esta a un paso más cerca de formar parte de la enorme comunidad de MYDEA.
        Por favor complete los campos solicitados para terminar su registro.</Text>
                            <View style={styles.subcontenedor_formulario} testID='CrearUsuario'>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Nombre Completo</Text>                            
                                    <TextInput style={[styles.textinput, errorNombre && styles.textinputError, errorNombre_2 && styles.textinputError, focusedInput === 'input7' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input7')}
                                    onBlur={handleBlur}
                                    onChangeText={text => setNombre(text)}
                                    value={nombre}
                                    placeholder='NOMBRE COMPLETO' ></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorNombre_2 && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Se permite un maximo de 50 caracteres</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={[styles.containerAlerta, errorNombre && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Termine de escribir su nombre</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Nombre de usuario</Text>                            
                                    <TextInput style={[styles.textinput, errorUsuario && styles.textinputError, focusedInput === 'input1' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input1')}
                                    onBlur={handleBlur}
                                    onChangeText={text => setUsuario(text)}
                                    value={usuario}
                                    placeholder='NOMBRE DE USUARIO' ></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorUsuario && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>El nombre de usuario debe tener entre 1 y 20 caracteres</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Correo electrónico</Text>
                                    <TextInput style={[styles.textinput, errorCorreo&& styles.textinputError, focusedInput === 'input2' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input2')}
                                    onBlur={handleBlur}
                                    onChangeText={text => setCorreo(text)}
                                    value={correo}
                                    placeholder='CORREO ELECTRÓNICO'></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorCorreo && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Por favor ingresa un correo electrónico válido</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold',  textAlign: 'left'}]}>Número Telefónico</Text>
                                    <TextInput style={[styles.textinput, errorTelefono && styles.textinputError, focusedInput === 'input3' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input3')}
                                    onBlur={handleBlur}
                                    onChangeText={text => setTelefono(text)}
                                    value={telefono}
                                    placeholder='NÚMERO TELEFÓNICO'></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorTelefono && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Por favor ingresa un número telefónico válido</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Contraseña</Text>
                                    <TextInput style={[styles.textinput, errorContra && styles.textinputError, focusedInput === 'input5' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input5')}
                                    onChangeText={text => setContra(text)}
                                    value={contra}
                                    placeholder='CONTRASEÑA'
                                    secureTextEntry={true}></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorContra && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>La contraseña debe tener entre 8 y 25 caracteres</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <Text style={[styles.texto, {fontWeight: 'bold', textAlign: 'left'}]}>Confirmar Contraseña</Text>
                                    <TextInput style={[styles.textinput, errorConfirmar && styles.textinputError, focusedInput === 'input6' ? styles.inputFocused : null]}
                                    onFocus={() => handleFocus('input6')}
                                    onChangeText={text => setConfirmarContra(text)}
                                    value={confirmarcontra}
                                    placeholder='CONFIRMAR'
                                    secureTextEntry={true}></TextInput>
                                    <View>
                                        <View style={[styles.containerAlerta, errorConfirmar && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Las claves no coinciden</Text>
                                        </View>
                                    </View>
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
                                    <View>
                                        <View style={[styles.containerAlerta, errorTipo && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Por favor selecciona un tipo de cuenta</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 20, alignItems: 'center', justifyContent: 'center',}}>
                                    <View style={{flexDirection: 'row', marginVertical: 5}}>
                                        <Checkbox
                                        colorScheme="danger" 
                                        size="md"
                                        aria-label="Aceptar Términos y Condiciones"
                                        style={{flex: 1}}
                                        //isChecked={aceptarTerminos}
                                        onChange={() => setAceptarTerminos(!aceptarTerminos)}>
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
                                        style={{flex: 1}}
                                        onChange={() => setAceptarPrivacidad(!aceptarPrivacidad)}>
                                        </Checkbox>
                                        <Text 
                                        style={[styles.texto, {borderColor: '#D95538', borderStyle:'solid', borderBottomWidth: 2, flex: 1, fontSize: 17, marginHorizontal: 5}]}
                                        onPress={() => navigation.navigate('Aviso_privacidad')}>Aceptar Aviso de Privacidad</Text>
                                    </View>
                                    <View>
                                        <View style={[styles.containerAlerta, aceptarTerminos && styles.containerAlertaError, aceptarPrivacidad && styles.containerAlertaError]}>
                                            <IonIcons style={styles.iconoAlerta} name='close-circle' size={18}></IonIcons>
                                            <Text style={styles.textoAlertas}>Acepta los términos y condiciones y el aviso de privacidad</Text>
                                        </View>
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
                {showAlert && (
                    <PanGestureHandler
                        onGestureEvent={onGestureEvent}
                        onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === State.END) {
                            if (nativeEvent.translationY > 100) {
                            hideAlert();
                            }
                        }
                        }}
                    >
                        <Animated.View
                        style={{
                            transform: [{ translateY }],
                            position: 'absolute',
                            width: '100%',
                            top: '5%',
                            zIndex: 1000,
                        }}
                        >
                        <Alert style={{marginLeft: '5%'}} h="85%" w="90%" status={tipoAlerta}>
                            <VStack space={2} flexShrink={1} w="80%">
                            <HStack flexShrink={1} space={2} justifyContent="center">
                                <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon size={6} />
                                <Text style={styles.texto_alerta}>
                                    {textoAlerta}
                                </Text>
                                </HStack>
                            </HStack>
                            </VStack>
                        </Alert>
                        </Animated.View>
                    </PanGestureHandler>
                )}
            </GestureHandlerRootView>
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
        borderRadius: 10,
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
    textoAlertas: {
        fontSize: 16,
        color: '#FF3333',
        marginHorizontal: 5,
    },
    containerAlerta: {
        flexDirection: 'row',
        marginTop: 5,
        display: 'none',
    },
    iconoAlerta: {
        color: '#FF3333',
    },
    textinputError: {
        borderColor: '#FF3333',
    },
    containerAlertaError: {
        display: 'block',
    },
    alerta: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto_alerta: {
        fontFamily: 'poppins-regular',
        fontSize: 22,
        textAlign: 'center',
    },
    icono_alerta: {
        fontSize: 20,
    },
});

export default Registro;